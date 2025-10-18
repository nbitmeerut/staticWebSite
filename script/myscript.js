var cd = course

function displayCourseToHome() {
    let courseArea = document.getElementById('courses');
    courseArea.innerHTML = '';
    let html = `<div class="course"><section id="title">Courses</section>`
    for (let category in cd) {
        html += `<h1>${category}</h1>
        <div class="catCourse">`;
      for (let i of cd[category]) {
        html += `
          <div class="coursedetail" onclick="updateCName('${i.coursename}')">
          
            <img src="${i.image}">
            <p><b>Course Name:</b> ${i.coursename}</p>
            <p><b>Duration:</b> ${i.duration}</p>
            <p><b>For more details</b> <a href="tel:+919837991954">Call Now</a></p>
          </div>`;
      }
      html += `</div></div>`;
    }
    courseArea.innerHTML += html;
  }

  // Generate dropdown menu
  let menus = '';
  let courseKeys = Object.keys(cd);

  for (let i = 0; i < courseKeys.length; i++) {
    let category = courseKeys[i];
    menus += `<li>
      <button class="sub-toggle">${category} <i class="fa-solid fa-angle-right"></i></button>
      <ul class="nested-menu">`;

    let courseItems = cd[category];
    for (let j = 0; j < courseItems.length; j++) {
      menus += `<li><a href="javascript:updateCName('${courseItems[j].coursename}')">${courseItems[j].coursename}</a></li>`;
    }

    menus += `</ul></li>`;
  }

  document.getElementById('dropdown').innerHTML = menus;

  // Toggle nested menus
  // document.querySelectorAll('.sub-toggle').forEach(button => {
  //   button.addEventListener('click', function (e) {
  //     e.stopPropagation();
  //     const nested = this.nextElementSibling;
  //     nested.classList.toggle('show');
  //   });
  // });

  // document.querySelectorAll('.sub-toggle').forEach(button => {
  //   button.addEventListener('click', function (e) {
  //     e.stopPropagation();
  //     const nested = this.nextElementSibling;
  //     nested.classList.toggle('show');
  //     this.classList.toggle('active');
  //   });
  // });
  document.querySelectorAll('.sub-toggle').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
  
      // Close all other nested menus
      document.querySelectorAll('.nested-menu').forEach(menu => {
        if (menu !== this.nextElementSibling) {
          menu.classList.remove('show');
          menu.previousElementSibling.classList.remove('active'); // remove arrow rotation
        }
      });
  
      // Toggle current menu
      const nested = this.nextElementSibling;
      nested.classList.toggle('show');
      this.classList.toggle('active');
    });
  });

  function updateCName(cname){
    localStorage.setItem('cname', cname)
    showCourse()
  }

  function showCourse(){
    for (let category in cd) {
      for (let i of cd[category]) {
        if (i.coursename == localStorage.getItem('cname')){
          let courseArea = document.getElementById('courses');
          courseArea.innerHTML = '';
          var html = `
            <div id="courseContainer">
              <div class="ctitle" id="${i.coursename}"><h2>${i.coursename}</h1></div>
              <div class="ctitle"><img src="${i.image}" width="50%" height="500px"></div>
              <div class="ctitle"><b>Duration: ${i.duration}</b></div>
              <div class="ctitle"><b>Fee (One Time): Rs. ${i.feeone}/-</b></div>
              <div class="ctitle"><b>Fee (Installments): Rs. ${i.feeinst}/-</b></div>
              <div class="ctitle"><b>Duration: ${i.duration}</b></div>
              <div class="ctitle">${i.description}</div>
              <div class="ctitle"><h2>Syllabus</h2></div>
              <div><iframe src="${i.file}"></iframe></div>
            </div>
          `
          courseArea.innerHTML = html
          document.location = `#${localStorage.getItem('cname')}`
          window.scrollTo({
            top: 550,
            behavior: 'smooth' // Optional: adds smooth scrolling
          });
        }
      }
    }
  }



  // Load courses on homepage
  
  function displayContactToHome() {
    let courseArea = document.getElementById('courses');
    courseArea.innerHTML = '';
    let html = ''
    html = 
    `
    <div id="title">Contact Us</div>
    <div id="contact">
      <div class="box1">
      <section>
        <h3>Head Office</h3>
        <p>13/6C, Nai sarak, Behind Bholashwar Mandir, Shastri Nagar,<br>
        Meerut (U.P.) India - 250004</p>
        <p> 9760091954</p>
        <p>9837991954</p>
        </section>
        <section>
        <h3>Branch Office</h3>
        <p>C-57/6, Kunj Vihar, Somdutt Vihar, Jagrati Vihar,<br>
        Meerut (U.P.) India - 250004</p>
        <p> 7454991954</p>
        <p> 7599034943</p>
        </section>
      </div>

      <div class="box2">
      <h3>Quick Contact</h3>
        <form action="http://formsubmit.co/rastogihimanshu.pcc@gmail.com" method="POST">
          <b>Name</b><br>
          <input type="text" name="name" placeholder="Name"><br>
          <b>Email</b><br>
          <input type="email" name="email" placeholder="Email"><br>
          <b>Mobile No.</b><br>
          <input type="text" name="mobileNo" placeholder="Mobile No."><br>
          <b>Query</b><br>
          <textarea type="text" name="query" placeholder="Any query"></textarea><br>
          <input type="submit">

        </form>
      </div>
    </div>
    `
    courseArea.innerHTML = html
  }

  function showAboutPage(){
    let courseArea = document.getElementById('courses');
    courseArea.innerHTML = '';
    let html = ''
    html = `<h2>Empowering Futures Since 2003</h2>`
    html += `<p>Founded in 2003, Nav Bharat Computer Institute has been a trusted name in digital education and skill development. Located in the heart of Meerut, we specialize in computer literacy, coding courses, and professional certifications that prepare students for the modern workforce.</p>`
    html += `<p>Our mission is to make technology education accessible, practical, and career-oriented. Whether you're a beginner or an aspiring developer, our curriculum is designed to meet diverse learning needs.</p>`
    html += `<p><b>🕒 Institute Timings:</b> 7:00 AM to 8:00 PM</p>`
    html += `<h3>📜 Courses Offered</h3>`
    html += `<ul>
              <li>Basic Computer Training</li>
              <li>Programming in C, C++, Java, Python</li>
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Certificate Courses in Office Automation & Data Entry</li>
             </ul>`
    html += `<p>We take pride in our experienced faculty, hands-on training approach, and commitment to student success. Join us and become part of a growing community of tech-savvy learners.</p>`
    courseArea.innerHTML = html
  }

setTimeout(function(){
  let win = document.getElementById("popup")
  win.style.marginTop = 0;
}, 5000)


document.getElementById('closepopup').addEventListener('click', function(){
  document.getElementById('popup').style.marginTop = '-100vh'
})




function updateCourseSelect() {
  console.log("Called")
    for (let category in cd) {
      for (let i of cd[category]) {
        var ele = document.createElement('option')
        ele.append(i.coursename)
        ele.setAttribute('value', i.coursename)
        document.getElementById('courseList').append(ele)
      }
    }
  }
  updateCourseSelect()
  

  
  window.onload = displayCourseToHome;

  document.getElementById('home').addEventListener('click', displayCourseToHome)
  document.getElementById('about').addEventListener('click', showAboutPage)
  document.getElementById("contactbtn").addEventListener('click', displayContactToHome)