import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let foo = this.store.createRecord('recipe', { foo: { bar: 123 } });

    await foo.save();

    foo.set('foo.bar', 456);

    await foo.save();
  }
}
