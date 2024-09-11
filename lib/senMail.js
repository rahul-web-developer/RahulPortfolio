
import nodemailer from "nodemailer"

// Configure the transport options
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rahul.javascript0@gmail.com",
    pass: "kmjqaskshoquxioe"
  }
});

const tamplate = (body)=> {
 const tamp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Data Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        /* Header Styles */
        header {
            background-color: #007bff;
            color: white;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            margin: 0;
            font-size: 2rem;
        }

        nav a {
            color: white;
            margin-left: 20px;
            text-decoration: none;
            font-size: 1rem;
        }

        nav a:hover {
            text-decoration: underline;
        }

        /* Main Section */
        .container {
            max-width: 1200px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 40px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
            gap: 20px; /* Space between columns */
        }

        .grid div {
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
            text-align: center; /* Center-align text for cleaner look */
        }

        .grid div label {
            display: block;
            font-weight: bold;
            margin-bottom: 10px;
            color: #555;
            font-size: 1.1rem;
        }

        .grid div p {
            margin: 0;
            color: #333;
            font-size: 1rem;
        }

        /* Footer Styles */
        footer {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }

        footer p {
            margin: 0;
            font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
            .grid {
                grid-template-columns: repeat(2, 1fr); /* Two columns for tablets */
            }
        }

        @media (max-width: 768px) {
            .grid {
                grid-template-columns: 1fr; /* Single column for mobile */
            }
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <h1>Company Name</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <!-- Main Content -->
    <div class="container">
        <h2>User Data</h2>
        <div class="grid">
            <!-- Full Name -->
            <div>
                <label for="fullname">Full Name</label>
                <p>${body.fullname}</p>
            </div>

            <!-- Email -->
            <div>
                <label for="email">Email</label>
                <p>${body.email}</p>
            </div>

            <!-- Contact Number -->
            <div>
                <label for="contact">Contact Number</label>
                <p>${body.mobile}</p>
            </div>

            <!-- Message -->
            <div>
                <label for="message">Message</label>
                <p>${body.message}</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
        <p>123 Business Street, City, Country</p>
    </footer>

</body>
</html>
`

  return tamp
}

// Function to send an email

const sendEmail = async (body) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rahul123techsunset@gmail.com',
    subject: 'new user',
    html: tamplate(body)
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, info.response);
  });
};

// Export the function
module.exports = sendEmail;
