import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let articles = [
            {
                id: 1,
                articleName: "Белорусам разрешили открывать электронные кошельки не выходя из дома",
                imgUrl: "images/internet-banking.jpg",
                tag: {
                    name: "Экономика",
                    tag: "economics"
                },
                previewText: "Превью текст",
                articleText: "Белорусам разрешили открывать электронные кошельки не выходя из дома",
                authorName: "Петя Семенов",
                publishDate: "21/02/2017",
                authorLogin: "pit",
                published: false
            }, {
                id: 2,
                articleName: "Под Парижем обокрали особняк Ротшильда",
                imgUrl: "images/rotshild.jpg",
                tag: {
                    name: "Общество",
                    tag: "society"
                },
                previewText: "Превью текст",
                articleText: "Под Парижем обокрали особняк Ротшильда",
                authorName: "Петя Семенов",
                publishDate: "Wed Mar 22 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "pit",
                published: true
            },
            {
                id: 3,
                articleName: "В Лос-Анджелесе объявляют номинантов на 'Оскар'",
                imgUrl: "images/oskarNews.jpg",
                tag: {
                    name: "Общество",
                    tag: "society"
                },
                previewText: `В Лос-Анджелесе проходит церемония объявления номинантов на ежегодную премию 'Оскар'.
                    Все 24 категории озвучивают в прямом эфире. Напомним, что в этом году Американская киноакадемия
                    отказалась от традиции объявлять номинантов в ходе отдельной торжественной церемонии и решила
                    ограничиться телемостом.`,
                articleText: `Американская академия кинематографических искусств и наук сегодня огласит список номинантов на премию «Оскар». Среди претендентов на выдвижение в категории «Лучший фильм на иностранном языке» — кинолента Андрея Кончаловского «Рай». Напомним, в этом году киноакадемия США изменила порядок объявления номинантов: имена претендентов будут объявлены во время онлайн-трансляции (начало в 16:18 мск) на сайте кинопремии, а не по телевидению.
                        Объявлять номинантов на «Оскар» будут актрисы Бри Ларсон и Дженнифер Хадсон, оператор Эмануэль Любецки, режиссер Джейсон Райтман, актер Кен Ватанабэ, а также президент киноакадемии Шерил Бун Айзекс.
                        89-я церемония вручения «Оскара» пройдет в Лос-Анджелесе 26 февраля, вести премию будет комик Джимми Киммел.
                        Напомним, фильм Андрея Кончаловского «Рай» был включен в шорт-лист премии «Оскар» в декабре. Ранее сценарий фильма признали лучшим на кинофестивале в Аргентине. Кинолента также получила «Серебряного льва» на Венецианском кинофестивале.`,
                authorName: "Петя Семенов",
                publishDate: "Tue Mar 21 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "pit",
                published: true
            },
            {
                id: 4,
                articleName: "Как изменилось население Беларуси за последние 120 лет. Инфографика",
                imgUrl: "images/changesInPopulation.jpg",
                tag: {
                    name: "Экономика",
                    tag: "economics"
                },
                previewText: `В этом году исполняется 120 лет со дня первой переписи в Беларуси.
                    Население страны пересчитывали десять раз. Впервые это произошло в 1897 году.
                    Тогда современная территория Беларуси входила в состав Российской империи, и в пяти
                    западных губерниях проживало 6 млн 673 тысячи человек.`,
                articleText: `Население Минска на протяжении этих 120 лет росло быстрее, чем население областных центров. Например, в 1897 году в городе проживала 91 тысяча человек. Это на 25 100 человек больше, чем в Витебске. При этом в 2016 году в столице уже было более 1 млн 959 тысяч человек, а в Витебске — 376 226.
                    Интересно, что процент населения страны, живущего в Минске, за это время рос намного быстрее, чем в столицах соседних стран: Киеве, Москве, Варшаве, Вильнюсе и Риге. Если в 1950 году в Минске проживало 3,5% всех жителей Беларуси, то в 2016 году — 20,6%. Медленнее всего прирастала горожанами Варшава. В 1950 году — 3,3% поляков жили в столице, а в 2015 году — 4,5%.
                    2000-е годы были для Беларуси демографически переломными. С середины 90-х население страны сокращалось. Однако после 2010-го эту тенденцию удалось остановить. В Литве, Латвии и Украине тем временем население страны сокращалось. А вот в Польше таких резких падений, как в бывших республиках СССР, вообще не было.
                    Ближайшая перепись населения в Беларуси пройдет 4−30 октября 2019 года, пробную проведут в октябре этого года — в Молодечно.`,
                authorName: "Илья Иванов",
                publishDate: "Tue Mar 21 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "ivanov",
                published: true
            },
            {
                id: 5,
                articleName: "Маленькая новость",
                imgUrl: "images/weather.jpg",
                tag: {
                    name: "Общество",
                    tag: "society"
                },
                previewText: "бла-бла",
                articleText: `Бла-бла`,
                authorName: "Яна Петриченко",
                publishDate: "Tue Mar 21 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "simon",
                published: true
            },
            {
                id: 6,
                articleName: "Дональд Трамп вступил в должность 45-го президента США",
                imgUrl: "images/trump.jpg",
                tag: {
                    name: "Политика",
                    tag: "politics"
                },
                previewText: "бла-бла",
                articleText: `Бла-бла`,
                authorName: "Яна Петриченко",
                publishDate: "Tue Mar 21 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "simon",
                published: true
            },
            {
                id: 7,
                articleName: "Индия измерит Эверест после землетрясения в Непале",
                imgUrl: "images/everest.jpg",
                tag: {
                    name: "Общество",
                    tag: "society"
                },
                previewText: "бла-бла",
                articleText: `Бла-бла`,
                authorName: "Яна Петриченко",
                publishDate: "Tue Mar 21 2017 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)",
                authorLogin: "simon",
                published: true
            }
        ];

        let users = [
            {
                login: "pit",
                password: "123",
                email: "pit@gmail.com",
                userName: "Петя Семенов",
                birthday: " ",
                phoneNumber: 5558900
            },
            {
                login: "simon",
                password: "12323",
                email: "yana@gmail.com",
                userName: "Яна Петриченко",
                birthday: " ",
                phoneNumber: 556489397
            }
        ];
        return {articles, users};
    }
}
