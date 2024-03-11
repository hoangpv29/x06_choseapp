const data = [
  {
    id: 1,
    image: "../img/image1.jpg",
    name: "QLDG Local",
  },
  {
    id: 2,
    countAvatar: 9,
    image: "../img/image2.gif",
    name: "Thong tin dang vien",
  },
  {
    id: 3,
    image: "../img/image3.png",
    name: "Quản trị viên",
  },
  {
    id: 4,
    image: "../img/image4.jpg",
    name: "Quản trị ứng dụng",
  },
  {
    id: 5,
    image: "../img/image5.jpg",
    name: "Đơn thư",
  },
  {
    id: 1,
    image: "../img/image1.jpg",
    name: "QLDG Local",
  },
  {
    id: 2,
    countAvatar: 9,
    image: "../img/image2.gif",
    name: "Thong tin dang vien",
  },
  {
    id: 3,
    image: "../img/image3.png",
    name: "Quản trị viên",
  },
  {
    id: 4,
    image: "../img/image4.jpg",
    name: "Quản trị ứng dụng",
  },
  {
    id: 5,
    image: "../img/image5.jpg",
    name: "Đơn thư",
  },
  {
    id: 1,
    image: "../img/image1.jpg",
    name: "QLDG Local",
  },
  {
    id: 2,
    countAvatar: 9,
    image: "../img/image2.gif",
    name: "Thong tin dang vien",
  },
];

const btnMyprofile = document.querySelector(".my-infor__btn");
const myInfoOption = document.querySelector(".my-infor__option");
const timeM = document.querySelector(".time");

function capNhatGio() {
  var currentTimeElement = document.querySelector(".time");
  var currentTime = new Date();

  // Add a leading zero if month < 10
  var dayOfMonth =
    currentTime.getDate() < 10
      ? "0" + currentTime.getDate()
      : currentTime.getDate();
  var month =
    currentTime.getMonth() + 1 < 10
      ? "0" + (currentTime.getMonth() + 1)
      : currentTime.getMonth() + 1;

  // Display the formatted date and time
  currentTimeElement.innerHTML =
    dayOfMonth +
    "/" +
    month +
    "/" +
    currentTime.getFullYear() +
    " " +
    (currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours()) +
    ":" +
    (currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes());
}

// Cập nhật liên tục mỗi giây
setInterval(capNhatGio, 1000);

btnMyprofile.addEventListener("click", (event) => {
  event.stopPropagation();

  myInfoOption.style.display =
    myInfoOption.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (event) => {
  // Kiểm tra xem sự kiện click có xảy ra bên ngoài myInfoOption không
  if (
    !myInfoOption.contains(event.target) &&
    myInfoOption.style.display === "block"
  ) {
    myInfoOption.style.display = "none";
  }
});
//chan lan chuot
function disableScroll(event) {
  event.preventDefault();
}
const listItem = document.querySelector(".grid-items");
listItem.innerHTML = data
  .map(
    (user) =>
      ` <div class="item-bg">
      
    <div class="item">
      <div class="item-hover">
    
      ${
        user.countAvatar !== undefined
          ? `<span class="countAvt">${user.countAvatar}</span>`
          : `<span class="countAvtNull"></span>`
      }
  
    
        <img
          src=${user.image}
          alt=""
        />
        <h4 class="item__name">${user.name}</h4>
      </div>
    </div>
  </div>`
  )
  .join("");
