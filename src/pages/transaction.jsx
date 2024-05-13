import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WhiteCurved from "../assets/img/curved-images/white-curved.jpg";
import Curved14 from "../assets/img/curved-images/curved14.jpg";
import masterCard from "../assets/img/logos/mastercard.png";
import soft from "../assets/img/logo-ct-dark.png";
const Transaction = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mengambil data pesanan dari backend saat komponen dimuat
    axios
      .get("http://localhost:3200/api/order/order")
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error.message);
      });
  }, []);

  return (
    <div>
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img src={soft} class="navbar-brand-img h-100" alt="main_logo" />
            <span class="ms-1 font-weight-bold">Soft UI Dashboard</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
        <div
          class="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/dashboard" className="nav-link">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 45 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>shop </title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1716.000000, -439.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(0.000000, 148.000000)">
                            <path
                              class="color-background opacity-6"
                              d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                            ></path>
                            <path
                              class="color-background"
                              d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="../pages/tables.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>office</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1869.000000, -293.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g
                            id="office"
                            transform="translate(153.000000, 2.000000)"
                          >
                            <path
                              class="color-background opacity-6"
                              d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                            ></path>
                            <path
                              class="color-background"
                              d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span class="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  active" href="../pages/billing.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 43 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>credit-card</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-2169.000000, -745.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(453.000000, 454.000000)">
                            <path
                              class="color-background opacity-6"
                              d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                            ></path>
                            <path
                              class="color-background"
                              d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span class="nav-link-text ms-1">Billing</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <nav
          class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <a class="opacity-5 text-dark" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  class="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Billing
                </li>
              </ol>
              <h6 class="font-weight-bolder mb-0">Billing</h6>
            </nav>
            <div
              class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                <div class="input-group">
                  <span class="input-group-text text-body">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul class="navbar-nav  justify-content-end">
                <li class="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    class="nav-link text-body font-weight-bold px-0"
                  >
                    <i class="fa fa-user me-sm-1"></i>
                    <span class="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    class="nav-link text-body p-0"
                    id="iconNavbarSidenav"
                  >
                    <div class="sidenav-toggler-inner">
                      <i class="sidenav-toggler-line"></i>
                      <i class="sidenav-toggler-line"></i>
                      <i class="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-body p-0">
                    <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    class="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul
                    class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="mb-2">
                      <a
                        class="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              class="avatar avatar-sm  me-3 "
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p class="text-xs text-secondary mb-0 ">
                              <i class="fa fa-clock me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-2">
                      <a
                        class="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              class="avatar avatar-sm bg-gradient-dark  me-3 "
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New album</span> by
                              Travis Scott
                            </h6>
                            <p class="text-xs text-secondary mb-0 ">
                              <i class="fa fa-clock me-1"></i>1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div class="d-flex py-1">
                          <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fill-rule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        class="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      ></path>
                                      <path
                                        class="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p class="text-xs text-secondary mb-0 ">
                              <i class="fa fa-clock me-1"></i>2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-xl-6 mb-xl-0 mb-4">
                  <div class="card bg-transparent shadow-xl">
                    <div
                      class="overflow-hidden position-relative border-radius-xl"
                      style={{ backgroundImage: `url(${Curved14})` }}
                    >
                      <span class="mask bg-gradient-dark"></span>
                      <div class="card-body position-relative z-index-1 p-3">
                        <i class="fas fa-wifi text-white p-2"></i>
                        <h5 class="text-white mt-4 mb-5 pb-2">
                          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                        </h5>
                        <div class="d-flex">
                          <div class="d-flex">
                            <div class="me-4">
                              <p class="text-white text-sm opacity-8 mb-0">
                                Card Holder
                              </p>
                              <h6 class="text-white mb-0">Jack Peterson</h6>
                            </div>
                            <div>
                              <p class="text-white text-sm opacity-8 mb-0">
                                Expires
                              </p>
                              <h6 class="text-white mb-0">11/22</h6>
                            </div>
                          </div>
                          <div class="ms-auto w-20 d-flex align-items-end justify-content-end">
                            <img
                              class="w-60 mt-2"
                              src="../assets/img/logos/mastercard.png"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-header mx-4 p-3 text-center">
                          <div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                            <i class="fas fa-landmark opacity-10"></i>
                          </div>
                        </div>
                        <div class="card-body pt-0 p-3 text-center">
                          <h6 class="text-center mb-0">Salary</h6>
                          <span class="text-xs">Belong Interactive</span>
                          <hr class="horizontal dark my-3" />
                          <h5 class="mb-0">+$2000</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mt-md-0 mt-4">
                      <div class="card">
                        <div class="card-header mx-4 p-3 text-center">
                          <div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                            <i class="fab fa-paypal opacity-10"></i>
                          </div>
                        </div>
                        <div class="card-body pt-0 p-3 text-center">
                          <h6 class="text-center mb-0">Paypal</h6>
                          <span class="text-xs">Freelance Payment</span>
                          <hr class="horizontal dark my-3" />
                          <h5 class="mb-0">$455.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-lg-0 mb-4">
                  <div class="card mt-4">
                    <div class="card-header pb-0 p-3">
                      <div class="row">
                        <div class="col-6 d-flex align-items-center">
                          <h6 class="mb-0">Payment Method</h6>
                        </div>
                        <div class="col-6 text-end">
                          <a
                            class="btn bg-gradient-dark mb-0"
                            href="javascript:;"
                          >
                            <i class="fas fa-plus"></i>&nbsp;&nbsp;Add New Card
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-md-6 mb-md-0 mb-4">
                          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                            <img
                              class="w-10 me-3 mb-0"
                              src={masterCard}
                              alt="logo"
                            />
                            <h6 class="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                            </h6>
                            <i
                              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit Card"
                            ></i>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                            <img
                              class="w-10 me-3 mb-0"
                              src="../assets/img/logos/visa.png"
                              alt="logo"
                            />
                            <h6 class="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                            </h6>
                            <i
                              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit Card"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card h-100">
                <div class="card-header pb-0 p-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Invoices</h6>
                    </div>
                    <div class="col-6 text-end">
                      <button class="btn btn-outline-primary btn-sm mb-0">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body p-3 pb-0">
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark font-weight-bold text-sm">
                          March, 01, 2020
                        </h6>
                        <span class="text-xs">#MS-415646</span>
                      </div>
                      <div class="d-flex align-items-center text-sm">
                        $180
                        <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                          <i class="fas fa-file-pdf text-lg me-1"></i> PDF
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex flex-column">
                        <h6 class="text-dark mb-1 font-weight-bold text-sm">
                          February, 10, 2021
                        </h6>
                        <span class="text-xs">#RV-126749</span>
                      </div>
                      <div class="d-flex align-items-center text-sm">
                        $250
                        <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                          <i class="fas fa-file-pdf text-lg me-1"></i> PDF
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex flex-column">
                        <h6 class="text-dark mb-1 font-weight-bold text-sm">
                          April, 05, 2020
                        </h6>
                        <span class="text-xs">#FB-212562</span>
                      </div>
                      <div class="d-flex align-items-center text-sm">
                        $560
                        <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                          <i class="fas fa-file-pdf text-lg me-1"></i> PDF
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex flex-column">
                        <h6 class="text-dark mb-1 font-weight-bold text-sm">
                          June, 25, 2019
                        </h6>
                        <span class="text-xs">#QW-103578</span>
                      </div>
                      <div class="d-flex align-items-center text-sm">
                        $120
                        <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                          <i class="fas fa-file-pdf text-lg me-1"></i> PDF
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                      <div class="d-flex flex-column">
                        <h6 class="text-dark mb-1 font-weight-bold text-sm">
                          March, 01, 2019
                        </h6>
                        <span class="text-xs">#AR-803481</span>
                      </div>
                      <div class="d-flex align-items-center text-sm">
                        $300
                        <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                          <i class="fas fa-file-pdf text-lg me-1"></i> PDF
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7 mt-4">
              <div class="card">
                <div class="card-header pb-0 px-3">
                  <h6 class="mb-0">Billing Information</h6>
                </div>
                <div class="card-body pt-4 p-3">
                  <ul class="list-group">
                    {orders.map((order) => (
                      <li
                        key={order._id}
                        class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
                      >
                        <div class="d-flex flex-column">
                          <h6 class="mb-3 text-sm">{order.customerName}</h6>
                          <span class="mb-2 text-xs">
                            Company Name:
                            <span class="text-dark font-weight-bold ms-sm-2">
                              {order.companyName}
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Email Address:
                            <span class="text-dark ms-sm-2 font-weight-bold">
                              {order.email}
                            </span>
                          </span>
                          <span class="mb-2 text-xs">
                            Items:
                            <span class="text-dark ms-sm-2 font-weight-bold">
                              {order.items}
                            </span>
                          </span>
                          <span class="text-xs">
                            tracking Number:
                            <span class="text-dark ms-sm-2 font-weight-bold">
                              {order.trackingNumber}
                            </span>
                          </span>
                        </div>
                        <div class="ms-auto text-end">
                          <a
                            class="btn btn-link text-danger text-gradient px-3 mb-0"
                            href="javascript:;"
                          >
                            <i class="far fa-trash-alt me-2"></i>Delete
                          </a>
                          <a
                            class="btn btn-link text-dark px-3 mb-0"
                            href="javascript:;"
                          >
                            <i
                              class="fas fa-pencil-alt text-dark me-2"
                              aria-hidden="true"
                            ></i>
                            Edit
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5 mt-4">
              <div class="card h-100 mb-4">
                <div class="card-header pb-0 px-3">
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="mb-0">Your Transaction's</h6>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end align-items-center">
                      <i class="far fa-calendar-alt me-2"></i>
                      <small>23 - 30 March 2020</small>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-4 p-3">
                  <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
                    Newest
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-arrow-down"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Netflix</h6>
                          <span class="text-xs">
                            27 March 2020, at 12:30 PM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        - $ 2,500
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-arrow-up"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Apple</h6>
                          <span class="text-xs">
                            27 March 2020, at 04:30 AM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,000
                      </div>
                    </li>
                  </ul>
                  <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
                    Yesterday
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-arrow-up"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Stripe</h6>
                          <span class="text-xs">
                            26 March 2020, at 13:45 PM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 750
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-arrow-up"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
                          <span class="text-xs">
                            26 March 2020, at 12:30 PM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 1,000
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-arrow-up"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
                          <span class="text-xs">
                            26 March 2020, at 08:30 AM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,500
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <button class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i class="fas fa-exclamation"></i>
                        </button>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Webflow</h6>
                          <span class="text-xs">
                            26 March 2020, at 05:00 AM
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-dark text-sm font-weight-bold">
                        Pending
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer pt-3  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>,
                    made with <i class="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      class="font-weight-bold"
                      target="_blank"
                    >
                      Pt Hijrah Inti Utama
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div class="fixed-plugin">
        <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i class="fa fa-cog py-2"> </i>
        </a>
        <div class="card shadow-lg ">
          <div class="card-header pb-0 pt-3 ">
            <div class="float-start">
              <h5 class="mt-3 mb-0">Soft UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div class="float-end mt-4">
              <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
          <hr class="horizontal dark my-1" />
          <div class="card-body pt-sm-3 pt-0">
            <div>
              <h6 class="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              class="switch-trigger background-color"
            >
              <div class="badge-colors my-2 text-start">
                <span
                  class="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                ></span>
              </div>
            </a>
            <div class="mt-3">
              <h6 class="mb-0">Sidenav Type</h6>
              <p class="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div class="d-flex">
              <button
                class="btn bg-gradient-primary w-100 px-3 mb-2 active"
                data-class="bg-transparent"
                onclick="sidebarType(this)"
              >
                Transparent
              </button>
              <button
                class="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
            </div>
            <p class="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            <div class="mt-3">
              <h6 class="mb-0">Navbar Fixed</h6>
            </div>
            <div class="form-check form-switch ps-0">
              <input
                class="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onclick="navbarFixed(this)"
              />
            </div>
            <hr class="horizontal dark my-sm-4" />
            <a
              class="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/soft-ui-dashboard"
            >
              Free Download
            </a>
            <a
              class="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
            >
              View documentation
            </a>
            <div class="w-100 text-center">
              <a
                class="github-button"
                href="https://github.com/creativetimofficial/soft-ui-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
              >
                Star
              </a>
              <h6 class="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                class="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
                class="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i class="fab fa-facebook-square me-1" aria-hidden="true"></i>
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
