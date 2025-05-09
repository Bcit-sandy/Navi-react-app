import re
import os

def extract_functions(js_content):
    # Find all exported function declarations
    pattern = r'export function (\w+)'
    return re.findall(pattern, js_content)

def extract_css_for_component(css_content, component_name):
    # Convert component name to CSS class name format
    css_class = re.sub(r'([a-z0-9])([A-Z])', r'\1-\2', component_name).lower()
    
    # Find all CSS rules that start with the component's class name
    pattern = rf'\.{css_class}[^}}]*}}'
    matches = re.findall(pattern, css_content)
    
    # Also find any related classes (e.g., -active, -container, etc.)
    related_pattern = rf'\.{css_class}-[^}}]*}}'
    related_matches = re.findall(related_pattern, css_content)
    
    return '\n'.join(matches + related_matches)

def create_component_files(js_content, css_content):
    # Create Buttons directory if it doesn't exist
    os.makedirs('app/Buttons', exist_ok=True)
    
    # Extract all function names
    functions = extract_functions(js_content)
    
    for function_name in functions:
        # Create component directory
        component_dir = f'app/Buttons/{function_name}'
        os.makedirs(component_dir, exist_ok=True)
        
        # Extract component's CSS
        css = extract_css_for_component(css_content, function_name)
        
        # Create component's JS file
        js_pattern = rf'export function {function_name}[^}}]*}}'
        js_match = re.search(js_pattern, js_content, re.DOTALL)
        if js_match:
            js_code = js_match.group(0)
            
            # Add necessary imports
            js_code = '''"use client";
import "./styles.css";
import "../../globals.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

''' + js_code
            
            # Write files
            with open(f'{component_dir}/index.js', 'w') as f:
                f.write(js_code)
            
            with open(f'{component_dir}/styles.css', 'w') as f:
                f.write(css)

# Read the source files
with open('app/components/buttons.js', 'r') as f:
    js_content = f.read()

with open('app/components/module.button.css', 'r') as f:
    css_content = f.read()

# Create component files
create_component_files(js_content, css_content) 