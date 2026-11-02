document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.link-row');
    
    rows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(15px)';
        
        setTimeout(() => {
            row.style.transition = 'all 0.4s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });


    const showVpnNotification = () => {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(20, 20, 20, 0.9);
                color: #fff;
                padding: 14px 20px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.1);
                font-family: inherit;
                font-size: 14px;
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 12px;
                direction: rtl;
                max-width: 320px;
                animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            ">
                <span style="font-size: 20px;">⚠️</span>
                <div style="flex: 1;">
                    <div style="font-weight: bold; margin-bottom: 2px;">توجه</div>
                    <div style="color: #bbb; font-size: 13px;">برخی سرویس‌ها ممکن است فیلتر باشند؛ لطفاً با VPN وارد شوید.</div>
                </div>
                <button id="close-vpn-notif" style="
                    background: transparent;
                    border: none;
                    color: #aaa;
                    font-size: 16px;
                    cursor: pointer;
                    padding: 4px;
                ">✕</button>
            </div>
        `;


        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes slideInUp {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideOutDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(100px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(notification);

    
        document.getElementById('close-vpn-notif').addEventListener('click', () => {
            notification.style.animation = 'slideOutDown 0.4s ease forwards';
            setTimeout(() => notification.remove(), 400);
        });
    };

    
    setTimeout(showVpnNotification, 1000);
});
