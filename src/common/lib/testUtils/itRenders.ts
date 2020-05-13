import { shallow } from 'enzyme';
import { ReactElement } from 'react';

export const itRenders = <P>(
  component: ReactElement<P>,
  name: string = 'should render without crashing'
) => {
  it(name, () => {
    const tree = shallow(component);
    expect(tree).toMatchSnapshot();
  });
};
