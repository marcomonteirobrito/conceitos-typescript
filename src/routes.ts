import { Request, Response } from 'express';

export function helloWorld(resquest: Request, response: Response) {
  const user = createUser({
    email: 'marco_monteiro@live.com',
    password: '123456',
    techs: [
      'NodeJS', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 100},
    ],
  });

  return response.json({ message: 'Hello World'});
}