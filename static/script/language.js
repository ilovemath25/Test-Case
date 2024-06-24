window.addEventListener('load', function() {
   if(!localStorage.getItem('language')) {
      localStorage.setItem('language', 'English');
   };
});
const translations = {
   "English": {
      welcome: "Welcome to Test Case!",
      selectLanguage: "Select Language",
      start: "Start",
      introduction: `This website is designed to help you create and manage test cases for your coding projects. Whether you are working on a small project or a large software development task, having a structured way to test your code is essential for ensuring quality and functionality.`,
      features: `Features of this website include:`,
      featureList: {
         "Input and Output Management":"Easily specify the input values and expected output for each test case.",
         "Code Integration":"Insert your code directly into the test cases to see how it performs against the inputs and outputs you have defined.",
         "Organized Test Cases":"Keep all your test cases organized in one place, making it simple to review and modify them as needed."
      },
      closing: `By using this tool, you can streamline your testing process, catch bugs early, and ensure your code runs smoothly. Happy coding!`,
      madeByMe: 'Made by Me',
      table: ['Input','Output',"Add more input","Expected output"],
      upload: ["Upload file here :","Choose file","No file chosen"],
      testButton: "Test",
      clearButton: "Clear All",
      pleaseUploadFile:"Please select a file to upload.",
      fileTypeMismatch: "The file type does not match the selected type. Expected a .${extension} file."
   },
   "Deutsch": {
      welcome: "Willkommen bei Test Case!",
      selectLanguage: "Sprache wählen",
      start: "Start",
      introduction: `Diese Website wurde entwickelt, um Ihnen bei der Erstellung und Verwaltung von Testfällen für Ihre Codierungsprojekte zu helfen. Egal, ob Sie an einem kleinen Projekt oder einer großen Softwareentwicklungsaufgabe arbeiten, eine strukturierte Testmethode ist entscheidend, um Qualität und Funktionalität zu gewährleisten.`,
      features: `Zu den Funktionen dieser Website gehören:`,
      featureList: {
         "Eingabe- und Ausgabeverwaltung":"Geben Sie einfach die Eingabewerte und die erwartete Ausgabe für jeden Testfall an.",
         "Code-Integration":"Fügen Sie Ihren Code direkt in die Testfälle ein, um zu sehen, wie er mit den definierten Eingaben und Ausgaben funktioniert.",
         "Organisierte Testfälle":"Halten Sie alle Ihre Testfälle an einem Ort organisiert, um sie bei Bedarf einfach überprüfen und ändern zu können."
      },
      closing: `Mit diesem Tool können Sie Ihren Testprozess optimieren, Fehler frühzeitig erkennen und sicherstellen, dass Ihr Code reibungslos läuft. Viel Spaß beim Codieren!`,
      madeByMe: 'Von mir gemacht',
      table: ['Eingabe','Ausgabe',"Mehr Eingabe hinzufügen","Erwartete Ausgabe"],
      upload: ["Datei hier hochladen :", "Datei auswählen", "Keine Datei ausgewählt"],
      testButton: "Testen",
      clearButton: "Alles Löschen",
      pleaseUploadFile:"Bitte wählen Sie eine Datei zum Hochladen aus.",
      fileTypeMismatch: "Der Dateityp stimmt nicht mit dem ausgewählten Typ überein. Erwartet wird eine .${extension}-Datei."
   },
   "Español": {
      welcome: "¡Bienvenido a Test Case!",
      selectLanguage: "Seleccionar idioma",
      start: "Comenzar",
      introduction: `Este sitio web está diseñado para ayudarte a crear y gestionar casos de prueba para tus proyectos de codificación. Ya sea que estés trabajando en un proyecto pequeño o en una gran tarea de desarrollo de software, tener una manera estructurada de probar tu código es esencial para garantizar la calidad y funcionalidad.`,
      features: `Las características de este sitio web incluyen:`,
      featureList: {
         "Gestión de Entrada y Salida":"Especifica fácilmente los valores de entrada y la salida esperada para cada caso de prueba.",
         "Integración de Código":"Inserta tu código directamente en los casos de prueba para ver cómo funciona con las entradas y salidas que has definido.",
         "Casos de Prueba Organizados":"Mantén todos tus casos de prueba organizados en un solo lugar, lo que facilita su revisión y modificación según sea necesario."
      },
      closing: `Al usar esta herramienta, puedes optimizar tu proceso de prueba, detectar errores temprano y asegurar que tu código funcione sin problemas. ¡Feliz codificación!`,
      madeByMe: 'Hecho por mí',
      table: ['Entrada','Salida',"Agregar más entrada","Salida Esperada"],
      upload: ["Subir archivo aquí :", "Elegir archivo", "No se ha elegido ningún archivo"],
      testButton: "Prueba",
      clearButton: "Borrar Todo",
      pleaseUploadFile:"Por favor selecciona un archivo para subir.",
      fileTypeMismatch: "El tipo de archivo no coincide con el tipo seleccionado. Se esperaba un archivo .${extension}."
   },
   "Français": {
      welcome: "Bienvenue dans Test Case!",
      selectLanguage: "Choisir la langue",
      start: "Commencer",
      introduction: `Ce site web est conçu pour vous aider à créer et à gérer des cas de test pour vos projets de codage. Que vous travailliez sur un petit projet ou une grande tâche de développement logiciel, avoir une méthode structurée pour tester votre code est essentiel pour garantir la qualité et la fonctionnalité.`,
      features: `Les fonctionnalités de ce site incluent :`,
      featureList: {
         "Gestion des Entrées et Sorties":"Spécifiez facilement les valeurs d'entrée et la sortie attendue pour chaque cas de test.",
         "Intégration du Code":"Insérez votre code directement dans les cas de test pour voir comment il fonctionne avec les entrées et sorties que vous avez définies.",
         "Cas de Test Organisés":"Gardez tous vos cas de test organisés en un seul endroit, ce qui facilite leur révision et modification au besoin."
      },
      closing: `En utilisant cet outil, vous pouvez rationaliser votre processus de test, détecter les bugs tôt et assurer que votre code fonctionne correctement. Bon codage !`,
      madeByMe: 'Fait par moi',
      table: ['Entrée','Sortie',"Ajouter plus d'entrée","Résultat Attendu"],
      upload: ["Télécharger le fichier ici :", "Choisir le fichier", "Aucun fichier choisi"],
      testButton: "Tester",
      clearButton: "Tout Effacer",
      pleaseUploadFile:"Veuillez sélectionner un fichier à télécharger.",
      fileTypeMismatch: "Le type de fichier ne correspond pas au type sélectionné. Un fichier .${extension} est attendu."
   },
   "हिन्दी": {
      welcome: "Test Case में आपका स्वागत है!",
      selectLanguage: "भाषा चुनें",
      start: "प्रारंभ करें",
      introduction: `यह वेबसाइट आपको अपने कोडिंग प्रोजेक्ट्स के लिए टेस्ट केस बनाने और प्रबंधित करने में मदद करने के लिए डिज़ाइन की गई है। चाहे आप एक छोटे प्रोजेक्ट पर काम कर रहे हों या एक बड़े सॉफ़्टवेयर विकास कार्य पर, आपके कोड का परीक्षण करने का एक संरचित तरीका होना गुणवत्ता और कार्यक्षमता सुनिश्चित करने के लिए आवश्यक है।`,
      features: `इस वेबसाइट की विशेषताओं में शामिल हैं:`,
      featureList: {
         "इनपुट और आउटपुट प्रबंधन":"प्रत्येक टेस्ट केस के लिए इनपुट मान और अपेक्षित आउटपुट को आसानी से निर्दिष्ट करें।",
         "कोड एकीकरण":"आपने जो इनपुट और आउटपुट परिभाषित किए हैं, उनके विरुद्ध अपने कोड के प्रदर्शन को देखने के लिए सीधे टेस्ट केस में अपना कोड डालें।",
         "संगठित टेस्ट केस":"अपने सभी टेस्ट केस को एक ही स्थान पर व्यवस्थित रखें, जिससे उन्हें समीक्षा और आवश्यकतानुसार संशोधित करना सरल हो जाता है।"
      },
      closing: `इस टूल का उपयोग करके, आप अपने परीक्षण प्रक्रिया को सुव्यवस्थित कर सकते हैं, प्रारंभिक त्रुटियों को पकड़ सकते हैं, और यह सुनिश्चित कर सकते हैं कि आपका कोड सुचारू रूप से चलता है। कोडिंग का आनंद लें!`,
      madeByMe: 'मेरे द्वारा बनाया गया',
      table: ['इनपुट','आउटपुट',"अधिक इनपुट जोड़ें","अपेक्षित आउटपुट"],
      upload: ["यहां फ़ाइल अपलोड करें:", "फ़ाइल चुनें", "कोई फ़ाइल चुनी नहीं गई"],
      testButton: "परीक्षण करें",
      clearButton: "सभी साफ़ करें",
      pleaseUploadFile:"कृपया अपलोड करने के लिए एक फ़ाइल चुनें।",
      fileTypeMismatch: "फ़ाइल प्रकार चयनित प्रकार से मेल नहीं खाता। अपेक्षित एक .${extension} फ़ाइल है।"
   },
   "Indonesian": {
      welcome: "Selamat datang di Test Case!",
      selectLanguage: "Pilih Bahasa",
      start: "Mulai",
      introduction: `Website ini dirancang untuk membantu Anda membuat dan mengelola kasus uji untuk proyek pengkodean Anda. Apakah Anda sedang mengerjakan proyek kecil atau tugas pengembangan perangkat lunak besar, memiliki cara terstruktur untuk menguji kode Anda sangat penting untuk memastikan kualitas dan fungsionalitas.`,
      features: `Fitur dari website ini termasuk:`,
      featureList: {
         "Manajemen Input dan Output":"Mudah menentukan nilai input dan output yang diharapkan untuk setiap kasus uji.",
         "Integrasi Kode":"Masukkan kode Anda langsung ke dalam kasus uji untuk melihat bagaimana kinerjanya terhadap input dan output yang telah Anda tentukan.",
         "Kasus Uji Terorganisir":"Simpan semua kasus uji Anda di satu tempat, membuatnya sederhana untuk meninjau dan memodifikasinya sesuai kebutuhan."
      },
      closing: `Dengan menggunakan alat ini, Anda dapat merampingkan proses pengujian Anda, menangkap bug lebih awal, dan memastikan kode Anda berjalan dengan lancar. Selamat coding!`,
      madeByMe: 'Dibuat oleh saya',
      table: ['Input','Output',"Tambahkan lebih banyak input","Output yang Diharapkan"],
      upload: ["Unggah file di sini :", "Pilih file", "Tidak ada file yang dipilih"],
      testButton: "Uji",
      clearButton: "Hapus Semua",
      pleaseUploadFile:"Silakan pilih file untuk diunggah.",
      fileTypeMismatch: "Jenis file tidak sesuai dengan jenis yang dipilih. Diharapkan file dengan tipe .${extension}."
   },
   "Malay": {
      welcome: "Selamat datang di Test Case!",
      selectLanguage: "Pilih Bahasa",
      start: "Mula",
      introduction: `Laman web ini direka untuk membantu anda membuat dan mengurus kes ujian untuk projek pengkodan anda. Sama ada anda bekerja pada projek kecil atau tugas pembangunan perisian yang besar, mempunyai cara yang berstruktur untuk menguji kod anda adalah penting untuk memastikan kualiti dan fungsi.`,
      features: `Ciri-ciri laman web ini termasuk:`,
      featureList: {
         "Pengurusan Input dan Output":"Mudah menentukan nilai input dan output yang dijangkakan untuk setiap kes ujian.",
         "Integrasi Kod":"Masukkan kod anda secara langsung ke dalam kes ujian untuk melihat bagaimana ia berfungsi terhadap input dan output yang anda telah tetapkan.",
         "Kes Ujian Teratur":"Simpan semua kes ujian anda di satu tempat, memudahkan untuk menyemak dan mengubahnya apabila perlu."
      },
      closing: `Dengan menggunakan alat ini, anda boleh menstrimkan proses pengujian anda, menangkap pepijat awal, dan memastikan kod anda berjalan dengan lancar. Selamat mencuba!`,
      madeByMe: 'Dibuat oleh saya',
      table: ['Input','Output',"Tambah lebih banyak input","Output yang Dijangkakan"],
      upload: ["Muat naik fail di sini :", "Pilih fail", "Tiada fail dipilih"],
      testButton: "Uji",
      clearButton: "Padam Semua",
      pleaseUploadFile:"Sila pilih fail untuk dimuat naik.",
      fileTypeMismatch: "Jenis fail tidak sepadan dengan jenis yang dipilih. Diharapkan fail jenis .${extension}."
   },
   "Português": {
      welcome: "Bem-vindo ao Test Case!",
      selectLanguage: "Selecionar Idioma",
      start: "Começar",
      introduction: `Este site foi projetado para ajudá-lo a criar e gerenciar casos de teste para seus projetos de codificação. Quer você esteja trabalhando em um pequeno projeto ou em uma grande tarefa de desenvolvimento de software, ter uma maneira estruturada de testar seu código é essencial para garantir a qualidade e funcionalidade.`,
      features: `As características deste site incluem:`,
      featureList: {
         "Gerenciamento de Entrada e Saída":"Especifique facilmente os valores de entrada e a saída esperada para cada caso de teste.",
         "Integração de Código":"Insira seu código diretamente nos casos de teste para ver como ele se comporta com as entradas e saídas que você definiu.",
         "Casos de Teste Organizados":"Mantenha todos os seus casos de teste organizados em um só lugar, facilitando a revisão e modificação conforme necessário."
      },
      closing: `Ao usar esta ferramenta, você pode otimizar seu processo de teste, detectar bugs precocemente e garantir que seu código funcione sem problemas. Feliz codificação!`,
      madeByMe: 'Feito por mim',
      table: ['Entrada','Saída',"Adicionar mais entrada","Saída Esperada"],
      upload: ["Carregar arquivo aqui :", "Escolher arquivo", "Nenhum arquivo selecionado"],
      testButton: "Testar",
      clearButton: "Limpar Tudo",
      pleaseUploadFile:"Por favor, selecione um arquivo para carregar.",
      fileTypeMismatch: "O tipo de arquivo não corresponde ao tipo selecionado. Esperado um arquivo .${extension}."
   },
   "မြန်မာ": {
      welcome: "Test Case မှ ကြိုဆိုပါသည်!",
      selectLanguage: "ဘာသာစကား ရွေးချယ်ပါ",
      start: "စတင်ပါ",
      introduction: `ဤဝက်ဘ်ဆိုဒ်သည် သင့်ကုဒ်ရေးကိရိယာများအတွက် စမ်းသပ်မှုအမှုများကို ဖန်တီးရန်နှင့် စီမံခန့်ခွဲရန် ကူညီရန်အတွက် ဒီဇိုင်းချထားသည်။ သင်သည် တစ်ခုချင်းစီကို စီမံခြင်းနှင့် စိစစ်ခြင်း သည့် တိုက်ရိုက် ကိရိယာများအတွက် အရေးကြီးသည်။`,
      features: `ဤဝက်ဘ်ဆိုဒ်၏ အင်္ဂါရပ်များတွင် အောက်ပါ အရာများ ပါဝင်သည်။`,
      featureList: {
         "အင်ပတ်နှင့် အောက်ပတ် စီမံခန့်ခွဲမှု":"စမ်းသပ်မှုအမှုတိုင်းအတွက် အင်ပတ်နှင့် မျှော်မှန်း အောက်ပတ် ကို လွယ်ကူစွာ သတ်မှတ်နိုင်သည်။",
         "ကုဒ် စိစစ်မှု":"သတ်မှတ်ထားသော အင်ပတ်နှင့် အောက်ပတ်များ အတိုင်း ကုဒ်ပစ္စည်းများကို တိုက်ရိုက် စမ်းသပ်မှုအမှုများတွင် ထည့်ပါ။",
         "စီမံထားသော စမ်းသပ်မှုအမှုများ":"သင့် စမ်းသပ်မှုအမှုများအားလုံးကို တစ်နေရာတည်းတွင် စီမံထားခြင်းဖြင့် မည်သည့်အချိန်တွင်မဆို ပြန်လည် စိစစ်ခြင်းနှင့် တည်းဖြတ်နိုင်သည်။"
      },
      closing: `ဤကိရိယာကို အသုံးပြုခြင်းဖြင့် စမ်းသပ်မှု အလုပ်စဉ်ကို ပိုမို လွယ်ကူစွာလုပ်ဆောင်နိုင်ပြီး အစောပိုင်းမှ ပြဿနာများကို ဖော်ထုတ်ကာ သင့်ကုဒ်သည် ပြဿနာကင်းစွာ လည်ပတ်သည့်အရာကို သေချာစေရန် ကူညီပါသည်။ ကုဒ်ရေးဆွဲခြင်းကို အောင်မြင်ပါစေ!`,
      madeByMe: 'ကျွန်ုပ်ဖန်တီးသည်',
      table: ['အင်ပတ်','အောက်ပတ်',"ပိုမို အင်ပတ် ထည့်ပါ","မျှော်မှန်းထားသော အောက်ပတ်"],
      upload: ["ဖိုင်ကို ဒီမှာ တင်ပါ:", "ဖိုင် ရွေးချယ်ပါ", "ရွေးချယ်ထားသော ဖိုင် မရှိပါ"],
      testButton: "စမ်းသပ်ပါ",
      clearButton: "အားလုံးကို ဖျက်ပါ",
      pleaseUploadFile:"တင်ရန် ဖိုင်တစ်ခုကို ရွေးချယ်ပါ။",
      fileTypeMismatch: "ဖိုင် အမျိုးအစားသည် ရွေးချယ်ထားသော အမျိုးအစားနှင့် မကိုက်ညီပါ။ မျှော်မှန်းထားသော ဖိုင်အမျိုးအစားမှာ .${extension} ဖြစ်သည်။"
   },
   "한국어": {
      welcome: "Test Case에 오신 것을 환영합니다!",
      selectLanguage: "언어 선택",
      start: "시작",
      introduction: `이 웹사이트는 코딩 프로젝트를 위한 테스트 케이스를 생성하고 관리하는 데 도움을 주기 위해 설계되었습니다. 작은 프로젝트에서 큰 소프트웨어 개발 작업에 이르기까지, 코드를 테스트하는 체계적인 방법을 갖추는 것은 품질과 기능을 보장하는 데 필수적입니다.`,
      features: `이 웹사이트의 기능은 다음과 같습니다:`,
      featureList: {
         "입출력 관리":"각 테스트 케이스에 대한 입력 값과 예상 출력 값을 쉽게 지정할 수 있습니다.",
         "코드 통합":"코드를 테스트 케이스에 직접 삽입하여 정의된 입력 및 출력에 대해 어떻게 작동하는지 확인할 수 있습니다.",
         "조직화된 테스트 케이스":"모든 테스트 케이스를 한 곳에 정리하여 필요에 따라 쉽게 검토하고 수정할 수 있습니다."
      },
      closing: `이 도구를 사용하면 테스트 프로세스를 간소화하고, 버그를 조기에 발견하며, 코드가 원활하게 실행되도록 할 수 있습니다. 코딩을 즐기세요!`,
      madeByMe: '제가 만든',
      table: ['입력','출력',"더 많은 입력 추가","예상 출력"],
      upload: ["여기에 파일 업로드 :", "파일 선택", "선택된 파일 없음"],
      testButton: "테스트",
      clearButton: "모두 지우기",
      pleaseUploadFile:"업로드할 파일을 선택하세요.",
      fileTypeMismatch: "파일 유형이 선택한 유형과 일치하지 않습니다. 예상되는 파일 유형은 .${extension}입니다."
   },
   "日本語": {
      welcome: "Test Caseへようこそ！",
      selectLanguage: "言語を選択",
      start: "開始",
      introduction: `このウェブサイトは、コードプロジェクトのテストケースを作成および管理するために設計されています。小規模なプロジェクトや大規模なソフトウェア開発タスクに取り組んでいるかどうかにかかわらず、コードをテストするための構造化された方法を持つことは、品質と機能を保証するために不可欠です。`,
      features: `このウェブサイトの機能には次のものがあります：`,
      featureList: {
         "入力と出力の管理":"各テストケースの入力値と予想される出力を簡単に指定できます。",
         "コード統合":"テストケースにコードを直接挿入して、定義した入力と出力に対してどのように動作するかを確認できます。",
         "整理されたテストケース":"すべてのテストケースを一箇所に整理しておくと、必要に応じて簡単に確認および変更できます。"
      },
      closing: `このツールを使用することで、テストプロセスを効率化し、早期にバグをキャッチし、コードがスムーズに動作することを保証できます。ハッピーコーディング！`,
      madeByMe: '私が作成',
      table: ['入力','出力',"さらに入力を追加","期待される出力"],
      upload: ["ここにファイルをアップロード:", "ファイルを選択", "ファイルが選択されていません"],
      testButton: "テスト",
      clearButton: "すべてクリア",
      pleaseUploadFile:"アップロードするファイルを選択してください。",
      fileTypeMismatch: "ファイルタイプが選択したタイプと一致しません。期待されるファイルは .${extension} です。"
   },
   "简体中文": {
      welcome: "欢迎來到 Test Case！",
      selectLanguage: "选择语言",
      start: "启动",
      introduction: `这个网站旨在帮助你创建和管理你的编码项目的测试案例。无论你是在做一个小项目还是一个大型的软件开发任务，有一个结构化的测试方法对于确保质量和功能性至关重要。`,
      features: `本网站的功能包括：`,
      featureList: {
         "输入和输出管理":"轻松指定每个测试案例的输入值和预期输出。",
         "代码集成":"将你的代码直接插入测试案例中，看看它在你定义的输入和输出下的表现。",
         "有组织的测试案例":"将所有的测试案例组织在一个地方，使审查和修改变得简单。"
      },
      closing: `通过使用这个工具，你可以简化你的测试过程，早期捕捉错误，并确保你的代码顺利运行。祝你编码愉快！`,
      madeByMe: '由我制作',
      table: ['输入','输出',"添加更多输入","预期输出"],
      upload: ["在此上传文件：", "选择文件", "未选择文件"],
      testButton: "测试",
      clearButton: "清除所有",
      pleaseUploadFile:"请选择要上传的文件。",
      fileTypeMismatch: "文件类型不符合所选类型。预期文件类型为 .${extension}。"
   },
   "繁體中文": {
      welcome: "歡迎來到 Test Case！",
      selectLanguage: "選擇語言",
      start: "啟動",
      introduction: `這個網站旨在幫助你創建和管理你的編碼項目的測試案例。無論你是在做一個小項目還是一個大型的軟件開發任務，有一個結構化的測試方法對於確保質量和功能性至關重要。`,
      features: `本網站的功能包括：`,
      featureList: {
         "輸入和輸出管理":"輕鬆指定每個測試案例的輸入值和預期輸出。",
         "代碼集成":"將你的代碼直接插入測試案例中，看看它在你定義的輸入和輸出下的表現。",
         "有組織的測試案例":"將所有的測試案例組織在一個地方，使審查和修改變得簡單。"
      },
      closing: `通過使用這個工具，你可以簡化你的測試過程，早期捕捉錯誤，並確保你的代碼順利運行。祝你編碼愉快！`,
      madeByMe: '由我制作',
      table: ['輸入','輸出',"添加更多輸入","預期輸出"],
      upload: ["在此上傳文件：", "選擇文件", "未選擇文件"],
      testButton: "測試",
      clearButton: "清除所有",
      pleaseUploadFile:"請選擇要上傳的文件。",
      fileTypeMismatch: "文件類型不符合選定類型。預期文件類型為 .${extension}。"
   },
};
function updateLanguage(language){
   try{document.querySelector('.lang p').textContent = language;}catch{}
   try{document.querySelector('.introduction p:nth-of-type(1)').textContent = translations[language].welcome;}catch{}
   try{document.querySelector('main p').textContent = translations[language].selectLanguage + ' :';}catch{}
   try{document.querySelector('.select-lang p').textContent = translations[language].selectLanguage;}catch{}
   try{document.getElementById('start').textContent = translations[language].start;}catch{}
   try{document.querySelector('.introduction p:nth-of-type(2)').textContent = translations[language].introduction;}catch{}
   try{document.querySelector('.introduction p:nth-of-type(3)').textContent = translations[language].features;}catch{}
   const featureList = document.querySelector('.introduction ul');
   featureList.innerHTML = '';
   try{Object.entries(translations[language].featureList).forEach(([keys,values]) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${keys}:</strong> ${values}`;
      featureList.appendChild(li);
   });}catch{}
   try{document.querySelector('.introduction p:nth-of-type(4)').textContent = translations[language].closing;}catch{}
   try{document.querySelector('footer section p:nth-of-type(1)').textContent = translations[language].madeByMe;}catch{}
   try{document.querySelectorAll("#test-case-table .head").forEach((cell, index) => {
      cell.textContent = translations[language].table[index]+' 1';
   });}catch{}
   try{document.getElementById('adder').textContent = translations[language].table[2]}catch{}
   try{document.querySelector('.upload p').textContent = translations[language].upload[0];}catch{}
   try{document.querySelector('.choose-file').textContent = translations[language].upload[1];}catch{}
   try{document.getElementById('no-file-chosen').textContent = translations[language].upload[2];}catch{}
   try{document.querySelector('button[onclick="send_to_python()"]').textContent = translations[language].testButton;}catch{}
   try{document.querySelector('button[onclick="clear_all()"]').textContent = translations[language].clearButton;}catch{}
}
const Lang = localStorage.getItem('language');
console.log(Lang);
updateLanguage(Lang);
var selectLang = document.querySelector('.select-lang p');
selectLang.textContent = localStorage.getItem('lang');
const languageCodes = {
   "English": 'en',
   "繁體中文": 'zh-Hant',
   "简体中文": 'zh-Hans',
   "Indonesian": 'id'
};
document.querySelectorAll('.lang-option a').forEach(p => {
   p.addEventListener('click', function(){
      const selectedLang = this.textContent;
      localStorage.setItem('language', selectedLang);
      window.location.reload();
   });
})