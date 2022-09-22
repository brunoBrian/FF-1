import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CardEntity } from './entities/card.entity';

@Injectable()
export class CardsService {
  cards: CardEntity[] = [
    {
      id: 1,
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      id: 2,
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      id: 3,
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      id: 4,
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      id: 5,
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      id: 6,
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      id: 7,
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon/7/',
    },
    {
      id: 8,
      name: 'wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon/8/',
    },
    {
      id: 9,
      name: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon/9/',
    },
  ];

  findAll() {
    return this.cards;
  }

  findOne(id: number) {
    const comment = this.cards.find((comment) => comment.id === id);

    console.log(id, 'jbjk');

    if (!comment) {
      throw new EntityNotFoundError(`Card ${id} não encontrado`);
    }

    return comment;
  }
}
