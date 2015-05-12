import React from 'react';
import Item from './Item';

export default class Category extends React.Component {
  static query() {
    return {
      category: {
        type: 'category',
        fields: ['title', 'subtitle'],
        include: {
          items: Item.query().item
        }
      }
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.category.title}</h1>
        <h2>{this.props.category.subtitle}</h2>
        {this.props.category.items.map(item => <Item item={item} />)}
      </div>
    );
  }
}
