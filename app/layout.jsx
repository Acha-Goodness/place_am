import React from 'react';

export const metadata = {
    title: "Placeam",
    description: "Sell and Buy"
} 

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
};

export default layout;
