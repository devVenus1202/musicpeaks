import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from 'antd';
import SubMenu from '.';

const { Sider } = Layout;
storiesOf('Utility', module).add('SubMenu', () => {
  const items = [
    {
      id: 94926,
      title:
        'Et quia eum nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat modi. Esse quibusdam earum cupiditate optio et nulla voluptatem. Qui est deserunt doloremque qui eaque in. Rerum voluptatum dolor corrupti. Voluptatem occaecati laudantium ea enim similique.',
      createTime: '2017-02-10T07:42:44.828Z',
      color: 0,
    },
    {
      id: 51842,
      title:
        'Possimus exercitationem qui ea quo repudiandae. Corporis magnam non soluta doloremque et sunt dolores sunt. Corrupti reiciendis sunt optio dolorem. Dignissimos quo adipisci veritatis et repellat. Omnis omnis dignissimos ipsum non iusto voluptates.',
      createTime: '2017-04-08T03:17:31.999Z',
      color: 0,
    },
    {
      id: 28180,
      title:
        'Tempore est velit non eaque. Exercitationem fugiat rerum magni. Delectus reprehenderit est neque autem amet. Qui consequatur velit et reprehenderit soluta voluptates. Id reprehenderit dolorum omnis ipsa quae dolores.',
      createTime: '2017-01-21T05:43:16.889Z',
      color: 3,
    },
    {
      id: 29619,
      title:
        'Officiis suscipit perferendis blanditiis aut aliquid quod et. Eius repellendus natus dicta saepe. In adipisci alias facilis nihil eligendi consequatur odit sequi. Quae quibusdam eos ut qui aut nisi beatae quaerat qui.',
      createTime: '2017-01-08T23:36:05.692Z',
      color: 4,
    },
    {
      id: 19600,
      title:
        'Dolor quas est quae. Id temporibus sed. Illum quo amet est fuga laborum facilis. Aut nisi consequatur voluptatum et. Eum et necessitatibus quam corporis expedita quasi reiciendis quia vitae. Earum harum deserunt minus modi consequuntur perspiciatis labore officia quo.',
      createTime: '2017-05-11T22:30:14.915Z',
      color: 4,
    },
    {
      id: 94927,
      title:
        'Et quia eum nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat modi. Esse quibusdam earum cupiditate optio et nulla voluptatem. Qui est deserunt doloremque qui eaque in. Rerum voluptatum dolor corrupti. Voluptatem occaecati laudantium ea enim similique.',
      createTime: '2017-02-10T07:42:44.828Z',
      color: 0,
    },
    {
      id: 51843,
      title:
        'Possimus exercitationem qui ea quo repudiandae. Corporis magnam non soluta doloremque et sunt dolores sunt. Corrupti reiciendis sunt optio dolorem. Dignissimos quo adipisci veritatis et repellat. Omnis omnis dignissimos ipsum non iusto voluptates.',
      createTime: '2017-04-08T03:17:31.999Z',
      color: 0,
    },
    {
      id: 28181,
      title:
        'Tempore est velit non eaque. Exercitationem fugiat rerum magni. Delectus reprehenderit est neque autem amet. Qui consequatur velit et reprehenderit soluta voluptates. Id reprehenderit dolorum omnis ipsa quae dolores.',
      createTime: '2017-01-21T05:43:16.889Z',
      color: 3,
    },
    {
      id: 29620,
      title:
        'Officiis suscipit perferendis blanditiis aut aliquid quod et. Eius repellendus natus dicta saepe. In adipisci alias facilis nihil eligendi consequatur odit sequi. Quae quibusdam eos ut qui aut nisi beatae quaerat qui.',
      createTime: '2017-01-08T23:36:05.692Z',
      color: 4,
    },
  ];

  return (
    <Sider width="200" className="isoSubMenuSidebar">
      <SubMenu
        items={items}
        selectItem={item => {
          return item;
        }}
        currentItem="Dolor quas est quae. Id temporibus sed. Illum quo amet est fuga laborum facilis. Aut nisi consequatur voluptatum et. Eum et necessitatibus quam corporis expedita quasi reiciendis quia vitae. Earum harum deserunt minus modi consequuntur perspiciatis labore officia quo."
      />
    </Sider>
  );
});
