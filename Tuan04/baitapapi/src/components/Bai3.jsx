import { useState } from "react";
import { useEffect } from "react";
import React from 'react'

function Bai3() {
    const [userID, setUserID] = useState(1);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!userID || userID < 1 || userID > 10){
            setUserData(null);
            setError("Not found user");
            return;
        }
        const fetchUser = async ()=> {
            try{
                setError(null);
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                if(!res.ok){
                    throw new Error("API request failed");
                }
                const data = await res.json();
                setUserData(data);
            } catch (err) {
                setUserData(null);
                setError("Error fetching user data");
            }
        }
        fetchUser();
    }, [userID]);
  return (
    <div>
        <div>
            <label htmlFor="">Nhập id user:</label>
            <input type="number"
            value={userID}
            onChange={(e) => setUserID(e.target.value)} 
            />
        </div>
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', minHeight: '120px' }}>
        {/* CONDITIONAL RENDERING (Hiển thị có điều kiện) */}
        
        {error ? (
          // Nếu có lỗi -> Hiện báo lỗi màu đỏ
          <h4 style={{ color: 'red' }}>{error}</h4>
        ) : userData ? (
          // Nếu có dữ liệu -> Hiện thông tin User
          <div>
            <h4 style={{ marginTop: 0, color: '#007bff' }}>{userData.name}</h4>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Website:</strong> {userData.website}</p>
          </div>
        ) : (
          // Trạng thái chờ chờ gõ phím
          <p>Đang tải dữ liệu...</p>
        )}
      </div>
    </div>
  )
}

export default Bai3