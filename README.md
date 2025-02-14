🎧 Audiophile E-Commerce Shop
An e-commerce platform for high-quality sound gear, including headphones and speakers.
Built from scratch by me, using only a ready-made layout as a reference.  
All functionality, logic, and implementation were developed independently.  
<p>&nbsp;</p>
🚀 Demo

🔗 [Live Demo](https://audiophile-frontend-nu.vercel.app/)  
<p>&nbsp;</p>
🛠 Tech Stack

Frontend: React, Redux Toolkit, React Router, TypeScript

State Management: Redux Toolkit

Testing: React Testing Library

Forms: Formik, Yup

Animations & Styling: SCSS, React animation on scroll.
<p>&nbsp;</p>
📌 Features
<p>&nbsp;</p>
✅ Cart functionality with stock validation

![audiophile1](https://github.com/user-attachments/assets/fd631eaf-d4ea-4fa0-9d0e-88611772b605)

This cart functionality allows users to manage the quantity of items before proceeding to checkout. The key features include:

Increment & Decrement Buttons: Users can increase (+) or decrease (-) the quantity of each product.
Delete Item: A trash icon next to each product allows users to remove specific items from the cart.
Remove All Items: A "Remove all" option clears the entire cart.
Total Price Calculation: The total price dynamically updates based on the quantity of products.
Checkout Button: Users can proceed to checkout after finalizing their cart.
This functionality enhances user experience by providing flexibility in managing their purchases before confirming the order. 

![audiophile2](https://github.com/user-attachments/assets/8b56770e-f633-4061-895f-f86047702f48)

Every time the + or - button is clicked, a request is sent to the backend to check stock availability.
If the stock limit is reached, the + button disappears to prevent over-ordering.
The cart dynamically updates based on backend responses.
This functionality ensures a seamless and user-friendly shopping experience while preventing stock issues.

![audiophile3](https://github.com/user-attachments/assets/b2536988-6b2b-4ea4-960b-19c3efe7ae62)

When a user attempts to add more products than are available in stock, the system prevents over-ordering by displaying a warning message:

How it Works:

Each time the + button is clicked, a request is sent to the backend to check stock availability.
If the user tries to exceed the available stock:
The + button disappears, preventing further increases.
The "Add to Cart" button remains active but only allows adding the available quantity.
If user clicks it he'll get a warning message: "There is not enough products in stock".
This feature ensures that users cannot add more items than are available, maintaining accurate stock levels. 

![Audiophile10](https://github.com/user-attachments/assets/df2e063e-80b6-4659-ba68-19a0d00cfce2)

When a product is completely sold out, the system informs users that the item is unavailable.

If the stock reaches zero, the product page updates automatically.
The "Add to Cart" button is disabled.
A clear "OUT OF STOCK" message is displayed along with an icon.
Users are prevented from adding the item to their cart.
This feature ensures transparency and prevents users from attempting to purchase unavailable products.
<p>&nbsp;</p>
✅ Form validation for checkout

![audiophile4](https://github.com/user-attachments/assets/04f4c7a9-14b6-4280-bc35-6856ef3bb10a)

![audiophile5](https://github.com/user-attachments/assets/924d1793-842f-4cd7-b102-e752a91e0f30)

![audiophile6](https://github.com/user-attachments/assets/5b9373ad-8eb6-4815-9fd7-8331ad573e77)

![audiphile7](https://github.com/user-attachments/assets/6a90176e-f5a2-4336-bf09-c054838cccdd)

The checkout form includes built-in validation to ensure accurate and complete user input.

Validation Rules:

Required Fields – All input fields must be filled before submission.
Email Validation – Ensures a properly formatted email address (e.g., user@example.com).
Phone Number Validation – Requires a valid phone number format to prevent incorrect entries.
E-Money Number Validation – Must be a valid number and contain 9 digits to proceed with e-money payments.
E-Money PIN Validation – Ensures the PIN is valid number and contain 4 digits.

If any validation fails, the user receives an error message prompting them to correct the input. This improves data accuracy and enhances user experience. 🚀

![audiophile8](https://github.com/user-attachments/assets/ab51aee2-890a-4396-923d-4821da75ca0c)

The checkout form memorize user input even when the page is refreshed or the route is changed. This ensures a seamless shopping experience by preventing data loss before order submission.

<p>&nbsp;</p>
✅ Short email confirmation with order details which functionality i made on backend side

![Audiophile9](https://github.com/user-attachments/assets/3ca2c650-94dc-4190-bba5-ca28cfb5a136)
<p>&nbsp;</p>
✅ Smooth animations for better UX

https://github.com/user-attachments/assets/d8359ef9-977e-4d95-a8f3-a4fc2a257caf
<p>&nbsp;</p>
✅ Fully responsive design (RWD)

https://github.com/user-attachments/assets/bc89ca8a-ea0e-49fe-83b8-d88fc2d75a66
<p>&nbsp;</p>
✅ Tests for UI components and logic
<p>&nbsp;</p>
📦 Installation & Setup

To run the project locally:

git clone https://github.com/your-repo/audiophile.git  

cd audiophile  

npm install  

npm start  

Then open http://localhost:3000 in your browser.
<p>&nbsp;</p>
🖥 Backend

This project uses a [custom backend API](https://github.com/Urichcool/Audiophile-backend) also built from scratch by me using Node.js and Express framework. A separate README will be provided for API setup.
<p>&nbsp;</p>
🧪 Testing
Run tests with:

npm test  
