// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import partner from './partner';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import hero from './hero';
import term from './term';
import step from './step';
import question from './question';
import option from './option';
import stat from './stat';
import tabMenu from './tabMenu';
import informationPractice from './informationPractice';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    partner,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    hero,
    term,
    step,
    question,
    option,
    stat,
    tabMenu,
    informationPractice,
  ]),
});
