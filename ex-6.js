// Exercise #6
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
// สร้าง Async Function เพื่อจัดการลำดับการทำงาน
async function displayJohnData() {
  // 1. เรียก getJohnProfile และรอจนกว่าจะได้ข้อมูล (await) 
  const profileData = await getJohnProfile();
  
  // 2. แสดงผลข้อมูล Profile ที่ได้ออกมา
  console.log(profileData);

  // 3. เรียก getJohnOrders ต่อ และรอจนกว่าจะได้ข้อมูล (await)
  const ordersData = await getJohnOrders();
  
  // 4. แสดงผลข้อมูล Orders ที่ได้ออกมา
  console.log(ordersData);
}

// เรียกใช้งานฟังก์ชัน
displayJohnData();
