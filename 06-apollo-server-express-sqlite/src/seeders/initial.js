import models from '../models';

export const createAuthors = async () => {
  await models.Author.create({
    username: 'user1',
    name: '안지훈',
    email: 'user1@myemail.com',
    password: 'mypassword1',
    role: 'ADMIN',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 1,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 1,
    articleId: 1,
  });
  await models.Comment.create({
    comment: 'I like this message.',
    authorId: 1,
    articleId: 1,
  });
  await models.Comment.create({
    comment: 'Can you share it to me?',
    authorId: 1,
    articleId: 1,
  });
  await models.Author.create({
    username: 'user2',
    name: '오지민',
    email: 'user2@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 2,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 2,
    articleId: 2,
  });
  await models.Author.create({
    username: 'user3',
    name: '한건우',
    email: 'user3@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 3,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 3,
    articleId: 3,
  });
  await models.Author.create({
    username: 'user4',
    name: '송서윤',
    email: 'user4@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 4,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 4,
    articleId: 4,
  });
  await models.Author.create({
    username: 'user5',
    name: '강수빈',
    email: 'user5@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 5,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 5,
    articleId: 5,
  });
  await models.Author.create({
    username: 'user6',
    name: '황지우',
    email: 'user6@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 6,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 6,
    articleId: 6,
  });
  await models.Author.create({
    username: 'user7',
    name: '송예은',
    email: 'user7@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 7,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 7,
    articleId: 7,
  });
  await models.Author.create({
    username: 'user8',
    name: '강지훈',
    email: 'user8@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 8,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 8,
    articleId: 8,
  });
  await models.Author.create({
    username: 'user9',
    name: '안은주',
    email: 'user9@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 9,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 9,
    articleId: 9,
  });
  await models.Author.create({
    username: 'user10',
    name: '이지민',
    email: 'user10@myemail.com',
    password: 'mypassword1',
  });
  await models.Article.create({
    title: 'Getting Started',
    content:
      'In this tutorial you will learn to make a simple setup of Sequelize.',
    authorId: 10,
  });
  await models.Comment.create({
    comment: 'Awesome',
    authorId: 10,
    articleId: 10,
  });
};