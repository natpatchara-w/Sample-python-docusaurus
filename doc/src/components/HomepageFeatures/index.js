import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import PropTypes from 'prop-types';

import { SVGProps } from "react";

const FeatureList = [
  {
    id: '0',
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    id: '1',
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    id: '2',
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({id, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{id} - {title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Svg: SVGProps,
  description: PropTypes.element,
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((prop) => {
            let ids = prop.id;
            return (
            <Feature key={ids} {...prop} />
            )
            })}
        </div>
      </div>
    </section>
  );
}
