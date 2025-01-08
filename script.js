// 存储所有寄语的对象
const captions = {
    caption1: "You came into this world like an angel, and just a few months later, you had grown so chubby. Unfortunately, during this time, Daddy didn't spend as much time with you as I should have—I'm sorry, BB. But this was the start of a healthy and well-nourished beginning in your life.",
    
    caption2: "In 2016, you learned to walk and could start playing in playgrounds. Do you remember the playground downstairs from our home? We spent so many years there. Every time I think of that playground, I picture you climbing the slide and hear your little voice calling out, 'Daddy, protect me.' As you climbed and played, you grew up little by little.",
    
    caption3: "This was in 2017, at the hotel lobby near Guangzhou Zoo. Seeing you hugging your brother like that moved me deeply. I hope the two of you will love each other like this for a lifetime, always ready to offer a hug and warmth when the other needs it. The bond between brothers is one of the most touching sights in the world.",
    
    caption4: "In 2018, when you were not even three and a half years old, you learned how to ride a bike without training wheels. Do you remember practicing under our building at Sorrento? I held the bike from behind, encouraging you to keep pedaling. When you succeeded, you shouted, 'Daddy, I did it!' I hope that in the future, whenever you face challenges, you'll think of your three-year-old self and remind yourself that with effort, you can achieve anything. And when you do, I hope you'll still come to me and say, 'Daddy, I did it.'",
    
    caption5: "In 2019, while interacting with animals in Australia, I could see that you have loved animals since you were little. You are a kind and empathetic child. I hope that as you grow up, you will always approach the people and things around you with kindness and treat everything with care.",
    
    caption6: "In 2020, we started wearing masks as we witnessed a once-in-a-century pandemic unfold around the world. What saddened me the most was that you, my dear, were only five years old and had to wear a mask for three consecutive years—something unfair for children like you. Thankfully, we now have advanced medical technology that allows humanity to face and recover from challenges posed by nature's diseases. Compared to the devastation caused by diseases like smallpox in the past, we are indeed fortunate. Even with your mask on, you were so full of joy. I hope that in your life, no matter what difficulties you encounter, you'll always maintain that bright smile.",
    
    caption7: "In 2021, you tried being a goalie for the first time, and you looked so cool. I hope you always stay open-minded and curious about everything. Many things are worth trying—be brave and explore as many different things as you can. Even if you end up not liking something, the purpose of trying is to help you understand yourself better.",
    
    caption8: "In 2022, we returned to Chongqing for the first time during the pandemic and experienced inbound quarantine for the first time. Looking at the deserted airport, it's something we might never witness again in our lifetime. The three years of the pandemic turned Hong Kong and the mainland into two completely different worlds. I'm glad that now we can freely travel between the two places again.",
    
    caption9: "In 2023, you started playing ice hockey, and I could see your passion for this sport growing stronger and stronger. I hope you'll maintain this enthusiasm and keep improving. Remember, the most important thing is not winning or losing, but enjoying the process and making progress.",
    
    caption10: "In 2024, you're turning 10 years old. Looking back at these photos, I can see how much you've grown. From a chubby baby to a handsome young boy who loves ice hockey, you've brought so much joy to our family. I hope you'll continue to grow happily and healthily, maintaining your kind heart and curious mind. Happy 10th birthday, my dear son!"
};

// 计算时间差并更新计数器
function updateCounter() {
    // 设置出生日期：2014年7月24日
    const birthDate = new Date(2014, 6, 24); // 月份是从0开始的，所以7月是6
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

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始更新计数器
    updateCounter();
    
    // 每分钟更新一次
    setInterval(updateCounter, 60000);

    // 为所有寄语设置内容
    document.querySelectorAll('.message').forEach(message => {
        const captionKey = message.getAttribute('data-caption');
        if (captions[captionKey]) {
            message.textContent = captions[captionKey];
        }
    });

    // 移动端交互处理
    if (window.innerWidth <= 768) {
        const photoItems = document.querySelectorAll('.photo-item');
        
        photoItems.forEach(item => {
            const caption = item.querySelector('.caption');
            
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