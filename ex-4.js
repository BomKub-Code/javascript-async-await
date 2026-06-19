// Exercise #4
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
// Start coding here
async function displayJohnProfile() {
  // ใช้ await นำหน้าฟังก์ชันที่ return Promise เพื่อรอให้ทำงานเสร็จ แล้วเอาค่ามาเก็บในตัวแปร
  const data = await getJohnProfile();
  
  // แสดงผลข้อมูลออกมา
  console.log(data);
}

// เรียกใช้งานฟังก์ชัน
displayJohnProfile();
