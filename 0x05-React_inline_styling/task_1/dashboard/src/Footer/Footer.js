import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
  const styles = StyleSheet.create({
    AppFooter: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      borderTop: '3px solid #e0344c',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'lighter',
      fontStyle: 'italic',
    }
  });

  return (
    <div className={css(styles.AppFooter)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}
