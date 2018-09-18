import React from 'react';
import QRCodePage from '../QRCodePage';
import { shallow } from 'enzyme';

describe('QrCodePage', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<QRCodePage />);

    expect(wrapper).toMatchSnapshot();
  });
});