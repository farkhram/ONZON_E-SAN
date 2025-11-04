// ********** ฟังก์ชันสำหรับ Hero Pop-up (รูปปก) **********

/**
 * ฟังก์ชันสำหรับเปิด Hero Pop-up (ถูกเรียกใน DOMContentLoaded เพื่อให้แสดงทันที)
 */
function showHeroPopup() {
    const heroPopup = document.getElementById('heroPopup');
    if (heroPopup) {
        heroPopup.style.display = 'flex';
    }
}

/**
 * ฟังก์ชันสำหรับปิด Hero Pop-up
 */
function closeHeroPopup() {
    const heroPopup = document.getElementById('heroPopup');
    if (heroPopup) {
        heroPopup.style.display = 'none';
    }
}


// ********** ฟังก์ชันสำหรับ Image Gallery Modal **********

/**
 * ฟังก์ชันสำหรับเปิด Modal แสดงรูปภาพแกลเลอรี
 */
function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modalImage.src = src;
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    modal.style.display = 'flex';
}

/**
 * ฟังก์ชันสำหรับปิด Modal แสดงรูปภาพแกลเลอรี
 */
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}


// ********** Event Listener หลัก: ทำงานเมื่อ DOM โหลดเสร็จ **********
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. สั่งให้ Hero Pop-up แสดงผลทันที
    showHeroPopup(); 

    // 2. กำหนดปุ่มปิดสำหรับ Hero Pop-up
    const closeHeroBtn = document.getElementById('closeHeroPopup');
    if (closeHeroBtn) {
        closeHeroBtn.onclick = closeHeroPopup;
    }
    
    // 3. กำหนด Event Listener สำหรับรูปภาพ Gallery ทั้งหมด (เมื่อคลิก)
    const galleryImages = document.querySelectorAll('.image-placeholder img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openImageModal(img.src, img.alt);
        });
    });

    // 4. กำหนดปุ่มปิดสำหรับ Image Gallery Modal
    const closeImageBtn = document.getElementById('closeImageModal');
    if (closeImageBtn) {
        closeImageBtn.onclick = closeImageModal;
    }
});


// ปิด Modal เมื่อผู้ใช้คลิกนอก Modal 
window.onclick = function(event) {
    const heroPopup = document.getElementById('heroPopup');
    const imageModal = document.getElementById('imageModal');
    
    // ปิด Hero Pop-up เมื่อคลิกนอกกล่อง
    if (event.target == heroPopup) {
        closeHeroPopup();
    }
    // ปิด Image Gallery Modal เมื่อคลิกนอกกล่อง
    if (event.target == imageModal) {
        closeImageModal();
    }
}