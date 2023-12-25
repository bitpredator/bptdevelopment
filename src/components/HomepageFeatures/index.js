import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Empiretown was designed to give you everything you need for your RP server.
        With simple and easy to use configurations.
        It does not require high coding knowledge.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        bptdevelopment ensures that the framework is always updated with new practices and security fixes.
        We also make sure to keep the framework as stable as possible.
      </>
    ),
  },
//  {
//    title: 'Powered by React',
//    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//    description: (
//     <>
//        Extend or customize your website layout by reusing React. Docusaurus can
//        be extended while reusing the same header and footer.
//      </>
//    ),
//  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
