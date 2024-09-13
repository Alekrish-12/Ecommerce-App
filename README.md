# **E-commerce Website**

## **Overview**
This project is a front-end eCommerce web application built using React.js and Tailwind CSS. It offers a seamless user experience for customers to browse products, manage carts, place orders, and access their accounts. It also provides an admin interface for product and order management. The website includes features like authentication, product filtering, sorting, and search.

## **Features**

### **Customer Features**
- **Home Page:** Displays the latest products, best-selling products, a newsletter subscription box, and a footer.
- **Product Collection Page:** Displays all products with filter, sort, and search functionalities.
- **Product Page:** Shows product details such as image gallery, title, price, description, add-to-cart button, and related products.
- **Cart Page:** View items in the cart, adjust quantities, and remove items.
- **Place Order Page:** Finalize and place orders based on the cart contents.
- **My Order List Page:** View the history of placed orders.
- **Login & Signup Pages:** 
  - **Signup Page:** New users can create an account by providing necessary details.
  - **Login Page:** Registered users can log in to access their accounts, view order history, and manage their profiles.
- **Additional Pages:** 
  - **About Page:** Provides information about the company.
  - **Contact Page:** Users can contact the company for inquiries or support.

### **Admin Features**
- **Admin Dashboard:** 
  - Add new products to the website.
  - List and delete products.
  - Display and update orders.

## **Technologies Used**
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Context API or Redux (if applicable)

## **Getting Started**

### **Prerequisites**
- Node.js installed on your system.

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### **Running the App**
1. Start the application:
   ```bash
   npm start
   ```
2. Open `http://localhost:3000` in your browser to view the app.

## **Project Structure**
- **Login & Signup Pages:** Enable user authentication. The signup page allows new users to create accounts, while the login page grants access to existing users. The authentication flow ensures secure access to customer features like cart, order history, and profile management.
- **Home Page:** Highlights product categories, featured products, and a newsletter subscription.
- **Products Collection Page:** Displays all products with filter, search, and sort functionalities.
- **Product Page:** Detailed product view with image gallery and related products.
- **Cart and Order Pages:** Manage cart items and place orders.
- **Admin Panel:** Provides admin functionalities for product and order management.

## **Contributing**
Contributions are welcome! Feel free to submit issues or pull requests.

## **License**
This project is licensed under the MIT License.

---

This version includes more details about the login and signup pages and their role in user authentication and account management.
