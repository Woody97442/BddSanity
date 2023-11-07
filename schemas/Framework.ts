// schemas/pet.js
export default {
  name: 'framework',
  type: 'document',
  title: 'Framework',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom du Framework',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Liste des sous-menu',
      of: [
        {
          name: 'name',
          title: 'Sous-menu',
          type: 'document',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nom',
            },
            {
              name: 'url',
              type: 'string',
              title: 'Url',
            },
          ],
        },
      ],
    },
  ],
}
