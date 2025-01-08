// 存储所有寄语的对象
const captions = {
    caption1: "You came into this world like an angel, and just a few months later, you had grown so chubby. Unfortunately, during this time, Daddy didn't spend as much time with you as I should have—I'm sorry, BB. But this was the start of a healthy and well-nourished beginning in your life.",
    
    caption2: "In 2016, you learned to walk and could start playing in playgrounds. Do you remember the playground downstairs from our home? We spent so many years there. Every time I think of that playground, I picture you climbing the slide and hear your little voice calling out, 'Daddy, protect me.' As you climbed and played, you grew up little by little.",
    
    caption3: "This was in 2017, at the hotel lobby near Guangzhou Zoo. Seeing you hugging your brother like that moved me deeply. I hope the two of you will love each other like this for a lifetime, always ready to offer a hug and warmth when the other needs it. The bond between brothers is one of the most touching sights in the world.",
    
    caption4: "In 2018, when you were not even three and a half years old, you learned how to ride a bike without training wheels. Do you remember practicing under our building at Sorrento? I held the bike from behind, encouraging you to keep pedaling. When you succeeded, you shouted, 'Daddy, I did it!' I hope that in the future, whenever you face challenges, you'll think of your three-year-old self and remind yourself that with effort, you can achieve anything. And when you do, I hope you'll still come to me and say, 'Daddy, I did it.'",
    
    caption5: "In 2019, while interacting with animals in Australia, I could see that you have loved animals since you were little. You are a kind and empathetic child. I hope that as you grow up, you will always approach the people and things around you with kindness and treat everything with care.",
    
    caption6: "In 2020, we started wearing masks as we witnessed a once-in-a-century pandemic unfold around the world. What saddened me the most was that you, my dear, were only five years old and had to wear a mask for three consecutive years—something unfair for children like you. Thankfully, we now have advanced medical technology that allows humanity to face and recover from challenges posed by nature's diseases. Compared to the devastation caused by diseases like smallpox in the past, we are indeed fortunate. Even with your mask on, you were so full of joy. I hope that in your life, no matter how dark it gets, there will always be a ray of light to shine on you and bring you brightness.",
    
    caption7: "In 2021, you tried being a goalie for the first time, and you looked so cool. I hope you always stay open-minded and curious about everything. Many things are worth trying—be brave and explore as many different things as you can. Even if you end up not liking something, the purpose of trying is to help you develop a more open attitude toward the unknown. When you no longer fear the unknown, it will be easier for you to make the right choices. Keep it up!",
    
    caption8: "In 2022, we returned to Chongqing for the first time during the pandemic and experienced inbound quarantine for the first time. Looking at the deserted airport, it's something we might never witness again in our lifetime. The three years of the pandemic turned Hong Kong and the mainland into two isolated islands. But everything will eventually pass. Perhaps one day, you can share your experiences during these three years as historical stories with your children. Regardless, we made it through. I hope you face the world with optimism. There will likely be many lows in your future, but I hope you confront them with your head held high, not with the dejected posture seen in this photo. Let this picture serve as a reminder of what not to do.",
    
    caption9: "In 2023, while biking downhill from the Alps in Europe, you fell on a gravel path and badly scraped your hand. Small stones got embedded in your skin and needed immediate disinfection and treatment. Do you remember how Daddy took you to find a clinic at the foot of the mountain? We eventually found a clinic that was about to close, but since we didn't have local currency and they didn't accept credit cards, we had to pay twice the price in U.S. dollars to buy the medicine. When the off-duty doctor saw how much we had paid, they stayed back to help treat your wound. Seeing your pitiful little face, Daddy's heart didn't rest easy until your injury was taken care of.",
    
    caption10: "During Christmas 2024, we went skiing in Canada. You were still learning how to carve, so we practiced on the magic carpet first. After mastering it, we started with the green runs, and by the time we left, you were confidently skiing on blue runs. I'm so proud of you! Of course, there was a moment when you fell because you were going too fast—it hurt, and you cried so much, even saying you never wanted to ski again. But in the end, you pushed through, came back the next day, and kept practicing until you mastered this skill. This shows that no matter what challenges or obstacles you face, as long as you don't give up easily, you will eventually succeed. Keep going, my dear!"
};

// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach(message => {
        const captionKey = message.dataset.caption;
        if (captions[captionKey]) {
            message.textContent = captions[captionKey];
        }
    });
});

// 音乐控制
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    let isPlaying = false;

    // 尝试播放音乐
    function tryPlayMusic() {
        music.play().then(() => {
            isPlaying = true;
            musicBtn.classList.remove('paused');
        }).catch(error => {
            console.log("播放失败:", error);
        });
    }

    // 监听鼠标悬停事件
    document.body.addEventListener('mouseover', function() {
        if (!isPlaying) {
            tryPlayMusic();
        }
    }, { once: true }); // 只触发一次

    // 音乐控制按钮点击事件
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicBtn.classList.add('paused');
        } else {
            tryPlayMusic();
        }
        isPlaying = !isPlaying;
    });

    // 添加滚动动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// 计时器功能
function updateCounter() {
    const birthDate = new Date('2015-01-12T18:36:00');
    const now = new Date();
    const diff = now - birthDate;

    // 计算天数、小时和分钟
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // 更新显示
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// 页面加载时立即更新一次
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    // 每分钟更新一次
    setInterval(updateCounter, 60000);
    
    // 原有的音乐控制代码...
});

// 为每个 caption 设置模糊背景
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.caption');
        
        // 将图片的 src 设置为 caption 的背景
        caption.style.backgroundImage = `url(${img.src})`;
    });
});

// 移动端照片交互
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        const viewBtn = item.querySelector('.view-details');
        const caption = item.querySelector('.caption');
        
        if (viewBtn && caption) {
            // 点击查看按钮显示寄语
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                caption.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
            
            // 点击关闭按钮区域隐藏寄语
            caption.addEventListener('click', (e) => {
                if (e.target === caption || e.target.closest('.caption::after')) {
                    caption.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });
        }
    });
}); 