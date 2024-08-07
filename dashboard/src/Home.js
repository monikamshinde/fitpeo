import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCalendar, faHome, faList, faPager, faSave, faSignOut, faSearch, faGear, faSuitcaseRolling, faTruck, faCancel, faMoneyBill, faBurger, faBowlFood, faGreaterThan, faUser, faStar, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';
import './assets/style.css'; // Assume you have some custom styles here
import CircularProgressBar from './CircularProgressBar';
import BarChart from './BarChart';
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';

export default function Home() {
    const [progress, setProgress] = useState(70);

    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
          {           
            data: [7, 6,1, 6, 8, 10, 12, 14, 14, 11, 5],
            backgroundColor: [
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff',
              '#7295ff'
            ],
            borderRadius:10,
            barThickness: 20,
            borderSkipped: false,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',          
          },
          title: {
            display: true,
            text: 'Activity',            
          },
        },
        scales: {
            x: {
                grid: {
                    display: false 
                },
                barPercentage: 0.8, 
                categoryPercentage: 0.8 
            },
            y: {
                beginAtZero: true
            }
        }
      };

    return (
        <React.Fragment>
            <div className="row mx-0">
                <div className="col-12 col-sm-12 px-0">                  
                        <div className="row mx-0">
                            <div className="col-sm-2 col-2 px-0 sidebar-list">
                                <div className="d-flex flex-column flex-shrink-0 black-second" style={{ width: 4.5 + 'rem', height:100 + 'vh' }}>
                                  <a href="#" className="d-block p-3 link-dark text-light text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                                    <FontAwesomeIcon icon={faList} />
                                    <span className="visually-hidden">Icon-only</span>
                                  </a>
                                  <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home">
                                                <FontAwesomeIcon icon={faHome} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link py-3 border-bottom" title="Dashboard">
                                                <FontAwesomeIcon icon={faCalendar} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link py-3 border-bottom" title="Orders">
                                                <FontAwesomeIcon icon={faSave} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link py-3 border-bottom" title="Products">
                                                <FontAwesomeIcon icon={faPager} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link py-3 border-bottom" title="Customers">
                                                <FontAwesomeIcon icon={faBagShopping} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="border-top">
                                        <a href="#" className="d-flex align-items-center justify-content-center p-3 text-decoration-none" title="Sign Out">
                                            <FontAwesomeIcon icon={faSignOut} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10 col-10 px-0 main-content">
                                <nav className="navbar navbar-light black-second">
                                    <div className="container-fluid">
                                        <div className="col-sm-6 col-md-3 col-12">
                                            <div className="input-group">
                                                <span className="input-group-text text-light" style={{'background-color': '#292b2f','border':'1px solid #4d4d4e'}} id="basic-addon1">
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </span>
                                                <input type="text" className="form-control" style={{'background-color': '#292b2f','border':'1px solid #4d4d4e'}} placeholder="Search" aria-label="Search" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 col-12 d-flex justify-content-end">
                                            <div className="navbar">
                                            <a href="#" className="nav-link" title="Message"><FontAwesomeIcon icon={faMessage} /></a>
                                                <a href="#" className="nav-link" title="Settings"><FontAwesomeIcon icon={faGear} /></a>                                                
                                                <a href="#" className="nav-link" title="Notification"><FontAwesomeIcon icon={faBell} /></a>
                                                <a href="#" className="nav-link userImg" title="Settings"><FontAwesomeIcon icon={faUser} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                                <div className="box p-4">
                                    <section>
                                        <h3 className="text-start">Dashboard</h3>
                                    </section>
                                    <section className="row">
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div className="count-box black-second text-start">
                                                        <FontAwesomeIcon icon={faSuitcaseRolling} />
                                                        <div>Total Orders</div>
                                                        <span>75</span><span className="float-end performance text-success">3%</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div className="count-box black-second text-start">
                                                        <FontAwesomeIcon icon={faTruck} />
                                                        <div>Total Delivered</div>
                                                        <span>70</span><span className="float-end performance text-success">3%</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div className="count-box black-second text-start">
                                                        <FontAwesomeIcon icon={faCancel} />
                                                        <div>Total Cancelled</div>
                                                        <span>05</span><span className="float-end performance text-danger">3%</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                                                    <div className="count-box black-second text-start">
                                                        <FontAwesomeIcon icon={faMoneyBill} />
                                                        <div>Total Revenue</div>
                                                        <span>$12k</span><span className="float-end performance text-success">3%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="count-box black-second d-flex">   
                                            <div className='w-50 text-start'>
                                                <div>Net Profit</div>
                                                <span>$6759.25</span>
                                                <div className="performance text-success">3%</div>
                                            </div>
                                            <div className='w-50 float-end'>
                                                <CircularProgressBar progress={progress} />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                            <div className='black-second mb-4'>                                            
                                               <BarChart data={data} options={options} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-start">
                                        <div className='goals black-second mb-4'>
                                            <div class="list-group">                                                
                                                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faBullseye} /><label className='text-light fw-bold ps-2'>Goals</label><FontAwesomeIcon className='float-end' icon={faGreaterThan} /></a>
                                                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faBurger} /><label className='text-light fw-bold ps-2'>Popular Dishes</label><FontAwesomeIcon className='float-end' icon={faGreaterThan} /></a>
                                                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faBowlFood} /><label className='text-light fw-bold ps-2'>Menus</label><FontAwesomeIcon className='float-end' icon={faGreaterThan} /></a>                                                
                                            </div>                                           
                                        </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                        <table class="table black-second text-start" style={{'font-size':'14px'}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Order No.</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='userImg'><FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label></td>
                                                    <td>1212</td>
                                                    <td>$12</td>
                                                    <td><span>Delivered</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className='feedback black-second mb-4'>
                                            <ul class="list-group text-start">                                                
                                                <li class="list-group-item list-group-item-action userImg">
                                                    <FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label>
                                                    <br />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='text-light' />
                                                    <br/>
                                                    <p style={{'font-size':'10px'}}>the food was delicious and beautifully presented. The service was also excellent and the ambiance was cozy and inviting.</p>
                                                </li>                                                
                                                <li class="list-group-item list-group-item-action userImg">
                                                    <FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label>
                                                    <br />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <br/>
                                                    <p style={{'font-size':'10px'}}>Food is good quality</p>
                                                </li>
                                                <li class="list-group-item list-group-item-action userImg">
                                                    <FontAwesomeIcon icon={faUser} /><label className='ps-2'>Wade Varen</label>
                                                    <br />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color'/>
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='gold-color' />
                                                    <FontAwesomeIcon icon={faStar} className='text-light' />
                                                    <br/>
                                                    <p style={{'font-size':'10px'}}>Food is good quality</p>
                                                </li>                                                
                                            </ul>                                           
                                        </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>                   
                </div>
            </div>
        </React.Fragment>
    );
}
