const textInput = document.getElementById('textInput');
const checkButton = document.getElementById('checkButton');
const suggestionsDiv = document.getElementById('suggestions');

const dictionary = [
    'سلام',
    'خوبی',
    'کتاب',
    'مدرسه',
    'میوه',
    'پارک',
    'گلاب',
    'درخت',
    'آسمان',
    'زرد',
    'آبی',
    'قهوه',
    'شکلات',
    'گل',
    'خرما',
    'گلابی',
    'پیاز',
    'خیار',
    'پنیر',
    'بهار',
    'پاییز',
    'زمستان',
    'تابستان',
    'گربه',
    'سگ',
    'ماهی',
    'مرغ',
    'پرنده',
    'گوشت',
    'سبزیجات',
    'آبگوشت',
    'کیف',
    'کفش',
    'پیراهن',
    'شلوار',
    'کت و شلوار',
    'کلاه',
    'موبایل',
    'کامپیوتر',
    'اینترنت',
    'تلویزیون',
    'رادیو',
    'ماشین',
    'دوچرخه',
    'قطار',
    'هواپیما',
    'باغ',
    'گلخانه',
    'آپاردی',
    'شخص',
    'اخم',
    'ﺁﺷﻐﺎﻝ',
    'اخم و تخم',
    'ﺍﺧﻤﻮ',
    'ﺍﺩﺍ',
    'اردنگ',
    'ﺍﺭﻗﻪ',
    'ﺍﻃﻮﺍﺭ',
    'ﺍﻃﻔﺎﺭ',
    'ﺍﻃﻔﻮﺭ',
    'ﺍﻃﻔﺎﺭی',
    'اکبیر',
    'کبیر',
    'طفل',
    'کثافت',
    'دنیا',
    'زندگی',
    'حس',
    'حال',
    'قشنگ',
    'آﻻﺧﻮﻥ',
    'الدنگ',
    'دولک',
    'الک دولک',
    'علم',
    'عالم',
    'قصه',
    'غصه',
    'آﻣﻞ',
    'ﺍﻧﺪﺍﺧﺘﻦ',
    'انگ',
    'انگ',
    'انداختن',
    'انگل',
    'انگولک',
    'ﺑﺎﺑﺎﻏﻮﺭی',
    'ﺑﺎﻣﺐ',
    'ﺑﺎﻣﺒﻮﻝ',
    'ﺑﺮﻳﺪﻩ',
    'ﺑﻠﺒﻞ',
    'ﺑﻨﺠﻞ',
    'بغل',
    'ﺑﻮﺭ',
    'پاییدن',
    'پاتوق',
    'پاتیل',
    'مست',
    'پارس',
    'پتی',
    'پچ پچ',
    'پخ',
    'پخت',
    'پخش',
    'پخمه',
    'تخمه',
    'پرت',
    'بالشت',
    'پتو',
    'پرسه',
    'پز',
    'پشتی',
    'بشکن',
    'پشکن',
    'پفیوز',
    'پک',
    'پکر',
    'پوچ',
    'پوزه',
    'پوک',
    'پشمک',
    'فندق',
    'سیگار',
    'ناراحت',
    'غم',
    'غمگین',
    'پیسی',
    'پیله',
    'ﺗﺎﺭ',
    'تپق',
    'قصد',
    'قطعی',
    'ﺗﺨﺲ',
    'ﺗﺮﺩ',
    'ﺗﺮﻳﺪﻥ',
    'غلتیدن',
    'شاخه',
    'باریک',
    'ترک',
    'ﺗﺸﺮ',
    'اوقات',
    'لطیف',
    'شیطان',
    'سکسکه',
    'سازش',
    'معامله',
    'مخلوط',
    'لجوج',
    'نادرست',
    'نیرنگ',
    'حقه',
    'تعرض',
    'مصدر',
    'تهی',
    'لخت',
    'حیوان',
    'قرمساق',
    'مالیدن',
    'وضع',
    'اجتماع',
    'تصور',
    'تصویر',
    'شلوغ',
    'انگشت',
    'کاسه',
    'حساس',
    'سرگردان',
    'ﺟﻔﻨﮓ',
    'ﺟﻴﻎ',
    'ﺧﺮﻓﺖ',
    'ﺧﻴﺖ',
    'ﺩﺍﻏﻮﻥ',
    'ﺯﭘﺮﺗﯽ',
    'ﺷﻠﺨﺘﻪ',
    'ﻃﺎﺱ',
    'ﻃﭙﺎﻧﺪﻥ',
    'ﻓﺮ',
    'ﻓﻴﺲ',
    'ﻗﺎﭘﻴﺪﻥ',
    'ﻗﺎﭺ',
    'ﻗﺎﻃﯽ',
    'ﻗﺎﻳﻢ',
    'ﻗﻠﻘﻠﮏ',
    'ﻗﻠﻤﺒﻪ',
    'ﻗﻨﺒﺮﮎ',
    'ﻗﻮﺭﺕ',
    'تکبر',
    'حاصل',
    'قلچماق',
    'غریب',
    'عجیب',
    'خارش',
    'بیهوده',
    'نشستن',
    'بلعیدن',
    'قوطی',
    'استعمال',
    'مغرور',
    'هوس',
    'حرکت',
    'ناگهانی',
    'اطوار',
    'تمسخر',
    'اشخاص',
    'حق',
    'وسط',
    'مغلوب',
    'زرنگ',
    'تقاضا',
    'مبحث',
    'قدرت',
    'اصطلاح',
    'صلح',
    'سلاح',
    // Add more words here
];


checkButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    const suggestions = [];

    if (text !== '') {
        const words = text.split(/\s+/);

        words.forEach(word => {
            if (!isWordCorrect(word)) {
                suggestions.push(suggestCorrection(word));
            }
        });

        showSuggestions(suggestions);
    }
});

function isWordCorrect(word) {
    return dictionary.includes(word);
}

function suggestCorrection(word) {
    let minDistance = Infinity;
    let closestWord = '';

    dictionary.forEach(dictWord => {
        const distance = levenshteinDistance(word, dictWord);
        if (distance <= minDistance) {
            minDistance = distance;
            closestWord = dictWord;
        }
    });

    return minDistance <= 2 ? `منظور شما؟ ${closestWord}` : `کلمه مشابه یافت نشد`;
}

function levenshteinDistance(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) dp[i][j] = j;
            else if (j === 0) dp[i][j] = i;
            else if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[m][n];
}

function showSuggestions(suggestions) {
    suggestionsDiv.innerHTML = suggestions.join('<br>');
    suggestionsDiv.style.display = 'block';
}