import React from 'react';

const BooksList = () => {
  const textbooks = [
    {
      title: 'A Concise Introduction to Software Engineering',
      author: 'Pankaj Jalote',
      publisher: 'Springer International Edition',
    },
    {
      title: 'Software Engineering, A Precise Approach',
      author: 'Pankaj Jalote',
      publisher: 'Wiley, 2010',
    },
    {
      title: 'Software Engineering, 3/e, & 7/e',
      author: 'Roger S. Pressman',
      publisher: 'TMH',
    },
    {
      title: 'Fundamentals of Software Engineering',
      author: 'Rajib Mall',
      publisher: 'PHI, 2/e',
    },
  ];

  const referenceBooks = [
    {
      title: 'Software Engineering, 8/e',
      author: 'Sommerville',
      publisher: 'Pearson',
    },
    {
      title: 'Software Engineering Principles and Practice',
      author: 'W S Jawadekar',
      publisher: 'TMH, 7/e',
    },
    {
      title: 'Software Engineering Concepts',
      author: 'R Fairley',
      publisher: 'TMH, 1997',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Textbooks</h2>
        <ul className="list-disc pl-6 mb-6">
          {textbooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong>, by {book.author} ({book.publisher})
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4">Reference Books</h2>
        <ul className="list-disc pl-6">
          {referenceBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong>, by {book.author} ({book.publisher})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksList;
