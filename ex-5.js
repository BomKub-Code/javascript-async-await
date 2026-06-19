// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function displayJohnProfileError() {
  try {
    // โค้ดส่วนนี้จะลองดึงข้อมูล (เหมือนคาดหวังว่าจะ Resolve)
    const data = await getJohnProfile();
    console.log(data);
  } catch (error) {
    // ถ้า Promise ถูก Reject มันจะกระโดดมาทำงานใน block catch ทันที
    console.log(error);
  }
}

// เรียกใช้งานฟังก์ชัน
displayJohnProfileError();
