// 存储所有寄语的对象
const captions = {
    caption1: "You came into this world like an angel...",  // 你的寄语内容
    caption2: "In 2016, you learned to walk...",
    // ... 其他寄语内容
};

// 移动端交互处理
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const photoItems = document.querySelectorAll('.photo-item');
        
        photoItems.forEach(item => {
            const caption = item.querySelector('.caption');
            const message = item.querySelector('.message');
            
            // 设置寄语内容
            const captionKey = message.getAttribute('data-caption');
            if (captions[captionKey]) {
                message.innerHTML = captions[captionKey];
            }
            
            // 点击照片显示寄语
            item.addEventListener('click', function(e) {
                if (!e.target.closest('.caption')) {
                    // 关闭其他打开的寄语
                    document.querySelectorAll('.caption.show').forEach(c => {
                        if (c !== caption) {
                            c.classList.remove('show');
                        }
                    });
                    caption.classList.add('show');
                }
            });
            
            // 点击背景关闭寄语
            caption.addEventListener('click', function(e) {
                if (e.target === caption) {
                    caption.classList.remove('show');
                }
            });
        });
    }
}); 