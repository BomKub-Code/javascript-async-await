//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
getJohnProfile()
  .then((profileData) => {
    // 1. แสดงผลข้อมูลที่ได้จาก getJohnProfile
    console.log(profileData);
    
    // 2. เรียกใช้ getJohnOrders และ Return ออกไปเพื่อส่งต่อให้ .then() ตัวถัดไป
    return getJohnOrders();
  })
  .then((ordersData) => {
    // 3. แสดงผลข้อมูลที่ได้จาก getJohnOrders
    console.log(ordersData);
  });
