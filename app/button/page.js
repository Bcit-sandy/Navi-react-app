"use client";

import Button from "./button";

export default function ButtonPage() {
    return (
        <main style={{ backgroundColor: "var(--neutral-blue-100)", padding: "20px", gap: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>

            {/* Sign in button */}
            <Button
                size="large"
                type="primary"
                value="Sign in"
            />
            
            {/* Sign up button */}
            <Button
               size="large"
               type="outline"
               value="Sign up"
            />

             {/* add option button */}
             <Button
                size="medium"
                type="round"
                icon="add.svg"
             /> 

             {/* join button */}
             <Button
                size="small"
                type="primary"
                value="Join"
             />

             {/* joined button */}
             <Button
                size="small"
                type="success"
                value="Joined"
             />

              {/* explore button */}
              <Button
                size="large"
                type="primary"
                value="Let's go explore!"
             />

             {/* post button */}
             <Button
                size="medium"
                type="primary"
                value="Post →"
             />

             {/* skip button */}
             <Button
                size="small"
                value="Skip"
             />

             {/* tag button */}
             <Button
                size="medium"
                type="outline"
                value="Tag"
             />

             {/* return button */}
            <Button
                icon="return.svg"
            />

            {/* Edit button */}
            <Button
                icon="edit.svg"
            />

            {/* Search button */}
            <Button
                icon="search.svg"
            />

            {/* Success icon */}
            <Button
                icon="success.svg"
            />  

            {/* heart icon */}
            <Button
                icon="filledheart.svg"
            />

            {/* empty heart icon */}
            <Button
                icon="outlineheart.svg"
            />

            {/* close icon */}
            <Button
                icon="delete.svg"
            />

            {/* profile icon */}
            <Button
                icon="profile.svg"
            />

            {/* share button */}
            <Button
                icon="share.svg"
            />
            
            
        </main>
    );
}