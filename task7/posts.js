
posts =[
    {
        id: '1',
        description: 'I like eat and sleep!',
        createdAt: new Date('2020-03-02T14:11:00'),
        author: 'no_name',
        photoLink: '',
        hashTags: ['#days'],
        likes:['no_name','anastasiya_zyatkova']
    },
    {
        id: '2',
        description: 'All or nothing',
        createdAt: new Date('2020-03-01T17:51:00'),
        author: 'anastasiya_zyatkova',
        photoLink: '',
        hashTags: ['#thoughts'],
        likes:['no_name','anastasiya_zyatkova','tutby']
    },
    {
        id: '3',
        description: 'It\'s wonderful weather for a walk today.',
        createdAt: new Date('2020-02-29T11:12:00'),
        author: 'tutby',
        photoLink: '',
        hashTags: ['#days','#walk'],
        likes:['anastasiya_zyatkova','tutby']
    },
    {
        id: '4',
        description: 'Never apologize. Don\'t say anything. Send flowers. No letters. Just flowers. They cover everything. Even graves.\nE. Remark "Three Comrades"',
        createdAt: new Date('2020-02-28T09:45:00'),
        author: 'literabook',
        photoLink: '',
        hashTags: ['#literatura','#poetry','#books'],
        likes:['no_name','anastasiya_zyatkova','tutby']
    },
    {
        id: '5',
        description: 'Today is International Men\'s Day!\n\nBe sure to congratulate your family and friends.',
        createdAt: new Date('2020-02-23T15:12:00'),
        author: 'tutby',
        photoLink: '23Feb.jpg',
        hashTags: ['#holidays'],
        likes:['no_name','literabook','anastasiya_zyatkova','tutby']
    },
    {
        id: '6',
        description: 'I\'m a second-year student at BSU. Very enlightening!',
        createdAt: new Date('2020-02-22T22:22:00'),
        author: 'anastasiya_zyatkova',
        photoLink: '',
        hashTags: ['#days','#study'],
        likes:['no_name','anastasiya_zyatkova','tutby']
    },
    {
        id: '7',
        description: 'People who live alone always have something on their minds that they\'d love to tell.\nA.P.Chekhov "About Love"',
        createdAt: new Date('2020-02-21T11:11:00'),
        author: 'film_quotes_',
        photoLink: '',
        hashTags: ['#films','#books'],
        likes:['literabook','anastasiya_zyatkova','tutby']
    },
    {
        id: '8',
        description: 'Behind the beautiful there\'s always some kind of tragedy.\nO.Wilde "Portrait of Dorian Gray."',
        createdAt: new Date('2020-02-20T16:33:00'),
        author: 'literabook',
        photoLink: '',
        hashTags: ['#literature','#books'],
        likes:['literabook','film_qotes_','anastasiya_zyatkova','tutby']
    },
    {
        id: '9',
        description: 'We get annoyed when we get hurt with something serious.\nW. Shakespeare.',
        createdAt: new Date('2020-02-19T13:42:00'),
        author: 'film_quotes_',
        photoLink: '',
        hashTags: ['#films','#books'],
        likes:['literabook','anastasiya_zyatkova','tutby']
    },
    {
        id: '10',
        description: 'Dogs are best friends of man!',
        createdAt: new Date('2020-02-18T18:01:00'),
        author: 'dogs',
        photoLink: 'dogs.jpg',
        hashTags: ['#dogs','#animal','#friends'],
        likes:['literabook','no_name','anastasiya_zyatkova','tutby']
    },
    {
        id: '11',
        description: '11',
        createdAt: new Date('2020-02-17T17:17:00'),
        author: '11',
        photoLink: '',
        hashTags: ['#11'],
        likes:['11','12']
    },
    {
        id: '12',
        description: '12',
        createdAt: new Date('2020-02-16T16:17:00'),
        author: '12',
        photoLink: '',
        hashTags: ['#12'],
        likes:['11','12','13']
    },
    {
        id: '13',
        description: '13',
        createdAt: new Date('2020-02-15T17:15:00'),
        author: '13',
        photoLink: '',
        hashTags: ['#13'],
        likes:['12','13']
    },
    {
        id: '14',
        description: '14',
        createdAt: new Date('2020-02-14T14:17:00'),
        author: '14',
        photoLink: '',
        hashTags: ['#14'],
        likes:['13','12','14']
    },
    {
        id: '15',
        description: '15',
        createdAt: new Date('2020-02-13T13:25:00'),
        author: '15',
        photoLink: '',
        hashTags: ['#15'],
        likes:['16','14']
    },
    {
        id: '16',
        description: '16',
        createdAt: new Date('2020-02-12T18:52:00'),
        author: '16',
        photoLink: '',
        hashTags: ['#16'],
        likes:['14','15']
    },
    {
        id: '17',
        description: '17',
        createdAt: new Date('2020-02-12T11:20:00'),
        author: '17',
        photoLink: '',
        hashTags: ['#17'],
        likes:['18','14']
    },
    {
        id: '18',
        description: '18',
        createdAt: new Date('2020-02-11T10:37:00'),
        author: '18',
        photoLink: '',
        hashTags: ['#18'],
        likes:['11','12']
    },
    {
        id: '19',
        description: '19',
        createdAt: new Date('2020-02-10T14:45:00'),
        author: '19',
        photoLink: '',
        hashTags: ['#19'],
        likes:['17','20']
    },
    {
        id: '20',
        description: '20',
        createdAt: new Date('2020-02-09T09:33:00'),
        author: '20',
        photoLink: '',
        hashTags: ['#20'],
        likes:['17','18','20']
    }
];

window.postsCollection.addAll(posts);
window.postsCollection.getPage(0,10,{hashTags:['#days']});
window.postsCollection.get('4');
window.postsCollection.remove('19');
window.postsCollection.edit('13',{description: 'Friday, The 13th'});
