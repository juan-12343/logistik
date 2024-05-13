import React, { useState } from "react";
import Curved from "../assets/img/curved-images/curved6.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3200/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Menampilkan SweetAlert untuk login berhasil
      Swal.fire({
        icon: "success",
        title: "Login berhasil",
        showConfirmButton: false,
        timer: 1500,
      });

      // Menunda navigasi ke dashboard dan menambahkan animasi sebelumnya
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } catch (error) {
      console.error("Login error:", error);

      // Menampilkan SweetAlert untuk login gagal
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: "Username atau password salah",
      });
    }
  };
  return (
    <div>
      <div class="container position-sticky z-index-sticky top-0"></div>
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-75">
            <div class="container">
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Welcome back
                      </h3>
                      <p class="mb-0">
                        Enter your username and password to sign in
                      </p>
                    </div>
                    <div class="card-body">
                      <form role="form" onSubmit={handleSubmit}>
                        <label>Username</label>
                        <div class="mb-3">
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="email-addon"
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                        <label>Password</label>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn bg-gradient-info w-100 mt-4 mb-0"
                          >
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="javascript:;"
                          class="text-info text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{ backgroundImage: `url(${Curved})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-4 mx-auto text-center">
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Company
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                About Us
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Team
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Products
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Blog
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Pricing
              </a>
            </div>
            <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-dribbble"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-twitter"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-instagram"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-pinterest"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-github"></span>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-8 mx-auto text-center mt-1">
              <p class="mb-0 text-secondary">
                Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script> PT
                Hijrah Inti Utama.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Signin;
