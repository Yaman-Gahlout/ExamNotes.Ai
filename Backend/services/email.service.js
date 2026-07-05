import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (email, otp) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "ExamNotes.Ai",
          email: "yamangahlout19@gmail.com",
        },
        to: [
          {
            email,
          },
        ],
        subject: "Reset Your Password",
        htmlContent: `
      <div
        style="
          max-width:640px;
          margin:auto;
          font-family:Arial,Helvetica,sans-serif;
          background:#020617;
          border:1px solid #1e293b;
          border-radius:18px;
          overflow:hidden;
        "
      >

        <!-- Header -->

        <div
          style="
            background:linear-gradient(90deg,#7c3aed,#06b6d4);
            padding:30px;
            text-align:center;
          "
        >
          <h1
            style="
              margin:0;
              color:white;
              font-size:30px;
            "
          >
            📚 ExamNotes AI
          </h1>

          <p
            style="
              margin-top:10px;
              color:white;
              opacity:.9;
            "
          >
            AI Powered Smart Notes
          </p>
        </div>

        <!-- Body -->

        <div
          style="
            padding:40px;
            background:#020617;
            color:#e2e8f0;
          "
        >

          <h2
            style="
              margin-top:0;
              color:white;
            "
          >
            Reset Your Password
          </h2>

          <p
            style="
              color:#cbd5e1;
              line-height:1.8;
              font-size:16px;
            "
          >
            We received a request to reset your
            <strong>ExamNotes AI</strong> password.
          </p>

          <p
            style="
              color:#cbd5e1;
              line-height:1.8;
            "
          >
            Use the verification code below to continue:
          </p>

          <!-- OTP -->

          <div
            style="
              margin:35px 0;
              text-align:center;
            "
          >
            <div
              style="
                display:inline-block;
                background:linear-gradient(90deg,#7c3aed,#06b6d4);
                padding:18px 40px;
                border-radius:14px;
                font-size:36px;
                font-weight:bold;
                color:white;
                letter-spacing:10px;
              "
            >
              ${otp}
            </div>
          </div>

          <!-- Important -->

          <div
            style="
              margin-top:35px;
              background:#0f172a;
              border-left:4px solid #06b6d4;
              padding:20px;
              border-radius:10px;
            "
          >
            <h3
              style="
                margin-top:0;
                color:white;
              "
            >
              Important
            </h3>

            <ul
              style="
                padding-left:18px;
                color:#cbd5e1;
                line-height:1.8;
              "
            >
              <li>This OTP is valid for <strong>10 minutes</strong>.</li>

              <li>Never share this OTP with anyone.</li>

              <li>ExamNotes AI will never ask for your OTP.</li>

              <li>If you didn't request this password reset, you can safely ignore this email.</li>
            </ul>
          </div>

          <p
            style="
              margin-top:35px;
              color:#94a3b8;
              line-height:1.8;
            "
          >
            Need help?
            Simply reply to this email or contact our support team.
          </p>

        </div>

        <!-- Footer -->

        <div
          style="
            background:#0f172a;
            padding:24px;
            text-align:center;
            color:#64748b;
            font-size:13px;
          "
        >
          © ${new Date().getFullYear()} ExamNotes AI

          <br><br>

          Made with ❤️ for Students

          <br><br>

          This is an automated email. Please do not reply.
        </div>

      </div>
      `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Email sent:", response.data);
    return response.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
};

export default sendEmail;
