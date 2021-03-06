import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import ResumePicture from '../atoms/ResumePicture';
import ResumeBasics from '../molecules/ResumeBasics';
import ResumeWork from '../molecules/ResumeWork';
import ResumeVolunteer from '../molecules/ResumeVolunteer';
import ResumeEducation from '../molecules/ResumeEducation';
import ResumeAwards from '../molecules/ResumeAwards';
import ResumePublications from '../molecules/ResumePublications';
import ResumeSkills from '../molecules/ResumeSkills';
import ResumeCategory from '../molecules/ResumeCategory';
import ResumeEtc from '../molecules/ResumeEtc';

class Cv extends React.Component {
  render() {
    const { resume, t } = this.props;
    /**
     * These are the categories similar to one another that contain an array of items each.
     * Each array item contains another array item containing the following in order:
     * 1. The inner component to render, 2. the key of the category, 3. the title of the category.
     *
     * @type {*[]}
     */
    const resumeCategories = [
      [
        ResumeWork,
        'work',
        t('resumePage.work'),
      ],
      [
        ResumeVolunteer,
        'volunteer',
        t('resumePage.volunteer'),
      ],
      [
        ResumeEducation,
        'education',
        t('resumePage.education'),
      ],
      [
        ResumeAwards,
        'awards',
        t('resumePage.awards'),
      ],
      [
        ResumePublications,
        'publications',
        t('resumePage.publications'),
      ],
    ];
    /**
     * Let's iterate through each category and display them, passing the current length of items
     * for that category and the length of the last category. The reason this is needed is
     * to optimize displaying categories to e.g. show two categories in one row in the case that
     * each category has one item each, to save space.
     *
     * @type {*}
     */
    const reduceCallback = (previousValue, [Comp, key, title]) => {
      const items = resume[key];
      const currentLength = items && items.length;
      if (!currentLength) {
        return previousValue;
      }
      const previousComponent = previousValue[previousValue.length - 1];
      const previousLength = previousComponent ? previousComponent.props.currentLength : 0;
      const lastComponentClearedLeft = previousComponent ?
        previousComponent.props.shouldClearLeft :
        false;

      /**
       * There are two layers of grouping: one is category, the other is section. Each category
       * can have one or more section in it.
       * Each of category and section will both always float left.
       * Categories will clear left if the last category did not clear, or the previous category
       * had more than 1 item in it (meaning this category cannot possibly be a continuation of
       * the last one).
       * @type {boolean}
       */
      const shouldClearLeft = !lastComponentClearedLeft || previousLength > 1;


      return [...previousValue, (
        <ResumeCategory
          key={key}
          title={title}
          currentLength={currentLength}
          shouldClearLeft={shouldClearLeft}
        >
          <Comp items={items} />
        </ResumeCategory>
      )];
    };
    const resumeCategoryComponents = resumeCategories.reduce(reduceCallback, []);

    return (
      <div>
        <Helmet>
          <title>{t('resumé')}</title>
        </Helmet>
        <div className="container resume-container is-hidden-mobile columns content">
          <div className="column is-three-quarters">
            <ResumeBasics basics={resume.basics} />
            {resumeCategoryComponents}
          </div>
          <div className="column is-one-quarter">
            <ResumePicture basics={resume.basics} />
            <ResumeSkills items={resume.skills} />
            <ResumeEtc
              languages={resume.languages}
              interests={resume.interests}
              references={resume.references}
            />
          </div>
        </div>

        <div className="container resume-container is-hidden-tablet">
          <ResumePicture basics={resume.basics} />
          <ResumeBasics basics={resume.basics} />
          <div className="clearfix">
            {resumeCategoryComponents}
          </div>
          <div>
            <ResumeSkills items={resume.skills} />
            <ResumeEtc
              languages={resume.languages}
              interests={resume.interests}
              references={resume.references}
            />
          </div>
        </div>
      </div>
    );
  }
}

Cv.propTypes = {
  resume: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    resume: state.resume,
  };
}

export default withNamespaces(['translation'])(connect(mapStateToProps)(Cv));

