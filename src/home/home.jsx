import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <>
      {/* hero Section  Start */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <img className='mt-5 ' src="./images/plumber-2.png" alt="" style={{ height: "900px",width:"100%" }} />
          </div>
          <div className='col-6 mt-5'>
            <div className='hero_section_content'>
              <h2>People are still being <br />  <b className='hero_section_heading_injured'> injured </b> </h2>
              <p className='w-75 mt-4'>The installation of coiled HDPE pipe poses a major safety riskdue to the stored energy within the pipe</p>
              <p className='w-75'>As a result, the use of larger Ø180 coiled pipe is no longer used in many areas.However, the problem still persists on smaller coil sizes too.</p>
              <div>
                <img className='w-100 ' src="./images/hero-section2.png" alt="" style={{ height: "530px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* hero Section  End */}

      {/* laysafe section start */}
      <div className='container-fluid tank'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 '>
              <img className='bo-2' src="./images/section 2 img.png" alt="" />
            </div>
            <div className='col-lg-6  text-center innoflow_safe_content'>
              <h1>Innoflow’s LaySAFE®</h1>
              <p className='mt-5'>Innoflow’s patent pending LaySAFE® solution reduces the stored energy withincoiled pipes as they come off the pipe installation trailer.
                In combination with its novel chute design and whilst following correct procedure with a tail end strap,it also helps to better stabilise and control the pipe inside the trailer.</p>
            </div>
          </div>
        </div>
      </div>
      {/* laysafe section end */}

      {/* barflour section start */}

      <div className='container-fluid  engineer-section'>
        <div class="container px-4 barflour_section">
          <h1 >Balfour beatty</h1>
          <div className='my-5'>
            <p className='text-center mb-5'>“LaySAFE now allows us to lay pipes far much more efficiently, and more importantly eliminates the historic Health and Safety risks associated with pulling coiled pipes from trailers. We provided feedback in the early development of the product, and used it in early trials throughout 2021. LaySAFE will go onto be a huge benefit to the whole pipe laying industry.’’</p>
          </div>
          <div class="row gx-5">
    <div class="col">
     <div  
      class="p-3  engineer-1">
        <div className='eng-icon'>
        <i class="fa-brands fa-slack"></i>  
        
        </div>
        <div  className='head-1'>
          <h1>heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non sapiente reprehenderit dolorum aperiam temporibus cum harum fugiat! Tempore aliquid officia non eaque optio corrupti voluptas incidunt ducimus temporibus cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem deleniti ut animi, numquam cum tenetur velit alias blanditiis provident dolores unde accusantium laudantium sequi aspernatur vel. Natus, suscipit quae!</p>
        </div>
      </div>
    </div>
    <div 
    class="col">
      <div 
      class="p-3  engineer-2">
        <div className='eng-icon'>
        <i class="fa-solid fa-network-wired"></i>
        </div>

        <div className='head-1'>
          <h1 >heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non sapiente reprehenderit dolorum aperiam temporibus cum harum fugiat! Tempore aliquid officia non eaque optio corrupti voluptas incidunt ducimus temporibus cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem deleniti ut animi, numquam cum tenetur velit alias blanditiis provident dolores unde accusantium laudantium sequi aspernatur vel. Natus, suscipit quae!</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div  
      class="p-3   engineer-3">
        <div className='eng-icon'>
        <i class="fa-solid fa-stopwatch-20"></i>
    
        </div>

        <div className='head-1' >
          <h1 >heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non sapiente reprehenderit dolorum aperiam temporibus cum harum fugiat! Tempore aliquid officia non eaque optio corrupti voluptas incidunt ducimus temporibus cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem deleniti ut animi, numquam cum tenetur velit alias blanditiis provident dolores unde accusantium laudantium sequi aspernatur vel. Natus, suscipit quae!</p>
        </div>
      </div>
    </div>
  </div>
          <div className='mt-5'>
            <p>“LaySAFE now allows us to lay pipes far much more efficiently, and more importantly eliminates the historic Health and Safety risks associated with pulling coiled pipes from trailers. We provided feedback in the early development of the product, and used it in early trials throughout 2021. LaySAFE will go onto be a huge benefit to the whole pipe laying industry.’’</p>
          </div>
        </div>
      </div>
      {/* barflour section end */}

      {/* specification section start */}
      <div class="container mt-5 mb-5">
        <h1 className='text-center specification_section'>
          Specification
        </h1>
        <div>
          <div class="container mt-5">

            <table class="table  table-striped table-bordered center">
              <thead>
                <tr>
                  <th className='table_heading'>Description</th>
                  <th className='table_heading'>Specification</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compatible Pipe Diameters</td>
                  <td>90mm</td>

                </tr>
                <tr>
                  <td>Compatible Pipe Diameters</td>
                  <td>90mm</td>
                </tr>
                <tr>
                  <td>Compatible Pipe Diameters</td>
                  <td>90mm</td>
                </tr>
                <tr>
                  <td>Compatible Pipe Diameters</td>
                  <td>90mm</td>
                </tr>
                <tr>
                  <td>Compatible Pipe Diameters</td>
                  <td>90mm</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>


      {/* specification section end */}

      {/* get in touch section start */}

      <div className='container-fluid  form-section'>
        <div className='container pt-5'>
          <h1 className='form-h1'>GET IN TOUCH</h1>
          <div className='form-name'>
            <div>
              <input type="text" placeholder='   Name' />
            </div>
            <div>
              <input type="text" placeholder='   Email' />
            </div>
          </div>
          <div>
            <textarea className='form-mass' rows="10" cols="70" name="comment" form="usrform">  Message</textarea>
            <div className='btn-contact'>
              <button className='form-btn'>Contact us</button>
            </div>
          </div>
        </div>
      </div>
      {/* get in touch section end */}


    </>
  )
}

export default Home
