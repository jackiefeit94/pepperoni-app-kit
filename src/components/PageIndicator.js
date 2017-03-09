import React, {PropTypes} from 'react';
import {range} from 'lodash';
import {
  View,
  StyleSheet
} from 'react-native';

import * as theme from '../utils/theme';

export default React.createClass({
  displayName: 'PageIndicator',
  propTypes: {
    style: View.propTypes.style,
    pageCount: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired
  },
  render() {
    const {pageCount, selectedIndex, style} = this.props;
    return (
      <View style={[styles.bullets, style]}>
        {range(0, pageCount).map((index) =>
          <View
            key={'bullet-' + index}
            style={
              index === selectedIndex
                ? styles.selectedBullet
                : styles.bullet
            }
          />
        )}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  bullets: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bullet: {
    margin: 4,
    backgroundColor: theme.colors.bullet,
    width: 6,
    height: 6,
    borderRadius: 3
  },
  selectedBullet: {
    margin: 6,
    backgroundColor: theme.colors.selectedBullet,
    width: 8,
    height: 8,
    borderRadius: 4
  }
});
