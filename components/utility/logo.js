import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../../config';
import LogoWhite from '../../static/image/logo.png';
import LogoBlack from '../../static/image/logo-black.png';
import SmallIcon from '../../static/image/small-icon.png';

export default function({ collapsed, type = false }) {
  const logoImg = type ? LogoBlack : LogoWhite;
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <Link href="/dashboard/profile">
          <a>
            <img src={SmallIcon} alt="logo" width="40px" style={{ marginTop: '18px' }} />
          </a>
        </Link>
      ) : (
        <Link href="/dashboard/profile">
          <a>
            <img src={logoImg} alt="logo" width="200px" />
          </a>
        </Link>
      )}
    </div>
  );
}
