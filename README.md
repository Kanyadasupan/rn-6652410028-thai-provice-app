# 🏯 Kamphaeng Phet Province Guide App
### Mobile Application developed with React Native Expo & Supabase 👋

แอปพลิเคชันแนะนำข้อมูลการท่องเที่ยวและประเพณีที่สำคัญของจังหวัดกำแพงเพชร พัฒนาโดยใช้ **React Native Expo** และดึงข้อมูลแบบ Real-time จาก **Supabase Database**

---

## ✨ คุณสมบัติหลัก (Features)

* **🏠 Home Dashboard:** แสดงคำขวัญประจำจังหวัดและข้อมูลเบื้องต้นของจังหวัดกำแพงเพชร
* **🎉 Traditions & Festivals:** รวบรวมงานประเพณีที่สำคัญ พร้อมรายละเอียดและประวัติความเป็นมา
* **📍 Recommended Places:** ระบบแนะนำสถานที่ท่องเที่ยว โดยแบ่งหมวดหมู่ตามประเภท เช่น สถานที่เชิงประวัติศาสตร์, ธรรมชาติ และคาเฟ่
* **🔍 Detailed Information:** ทุกสถานที่ท่องเที่ยวและงานประเพณีมีรายละเอียดข้อมูลและรูปภาพประกอบที่ชัดเจน
* **📞 One-Touch Contact:** ฟังก์ชันกดเบอร์โทรศัพท์เพื่อโทรออกไปยังสถานที่นั้นๆ ได้ทันที
* **🗺️ Map Integration:** เชื่อมต่อกับ Google Maps เพื่อนำทางไปยังจุดหมายได้อย่างแม่นยำ

---

## 📱 หน้าจอแอปพลิเคชัน (Screenshots)

### 🚀 เริ่มต้นใช้งานและหน้าหลัก
| หน้าจอเริ่มต้น | หน้าหลัก (ส่วนบน) | ข้อมูลจังหวัด |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/534768d7-e104-4a7b-a490-ebe272075e9b" width="200"> | <img src="https://github.com/user-attachments/assets/5776a2c1-3223-4d74-99e0-fca8b36a6389" width="200"> | <img src="https://github.com/user-attachments/assets/f2cd02a1-c58f-4b2a-ab91-6cdc7c9f0b70" width="200"> |

### 🎊 งานประเพณีและสถานที่แนะนำ
| รายละเอียดงานประเพณี | รายการสถานที่แยกประเภท | รายการสถานที่ (ต่อ) |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/00266cf2-e975-4122-8b73-159223e152d6" width="200"> | <img src="https://github.com/user-attachments/assets/2d1e5aad-4bdd-4f50-b3b4-66888fb633f4" width="200"> | <img src="https://github.com/user-attachments/assets/7b72f46a-ca29-4fe2-83b7-1e04e89a287a" width="200"> |

### 📖 รายละเอียดสถานที่และฟังก์ชันการใช้งาน
| หน้ารายละเอียด | ฟังก์ชันการโทรออก | เชื่อมต่อ Google Maps |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/0f55b407-ab23-49ff-959e-be3704c7db8b" width="200"> | <img src="https://github.com/user-attachments/assets/c214adeb-f734-4d1f-9d08-444ba44cfb37" width="200"> | <img src="https://github.com/user-attachments/assets/8bc8a9df-2ec3-4ba9-a0c3-9ce7f838851f" width="200"> |

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

* **Frontend:** [React Native](https://reactnative.dev/) พร้อม [Expo SDK](https://expo.dev/)
* **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
* **Navigation:** React Navigation
* **External Linking:** Expo Linking (สำหรับโทรศัพท์และแผนที่)

---

## 📊 โครงสร้างฐานข้อมูล (Backend)
โปรเจกต์นี้ใช้ **Supabase** ในการจัดการข้อมูลทั้งหมด ทำให้สามารถอัปเดตข้อมูลสถานที่ท่องเที่ยวและรูปภาพได้ผ่านระบบ Cloud โดยไม่ต้องอัปเดตตัวแอป

<img src="https://github.com/user-attachments/assets/2b1fb40e-cdd3-4462-91b9-0814573eb8c0" width="400" alt="Database Schema">

---

## 🚀 การติดตั้งและรันโปรเจกต์

1.  **Clone โปรเจกต์:**
    ```bash
    git clone [https://github.com/KanyadaSupan/kamphangpet-app.git](https://github.com/KanyadaSupan/kamphangpet-app.git)
    cd kamphangpet-app
    ```

2.  **ติดตั้ง Dependencies:**
    ```bash
    npm install
    ```

3.  **ตั้งค่า Environment Variables:**
    สร้างไฟล์ `.env` และใส่ค่า API จาก Supabase ของคุณ:
    ```env
    EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
    EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **รันแอปพลิเคชัน:**
    ```bash
    npx expo start
    ```

---

## 👤 ผู้พัฒนา
**Developed by [Kanyada](https://github.com/KanyadaSupan)**
*Student at Southeast Asia University | Digital Technology and Innovation*

---
Developed with ❤️ for Kamphaeng Phet
