import { Server } from '../../../index';
import { AppConfig } from '../configs/app.config';
const { baseRoute } = AppConfig;
/**
 * * import chai, chai-http dependencies
 * * also inject Server for mocha to run tests
 * * import should aggregator from chai
 * * import expect aggregator form chai
 * * use chai-http with chai to perform http request
 */
import chai from 'chai';
import chaiHttp from 'chai-http';
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

/**
 * * global variables needed for the entire test file
 */
let someVariable = '';

/**
 * * all global variable reset method
 */
const resetAllTestVariables = () => {};

/**
 * * example controller endpoint test cases
 */
describe('Example controller tests', () => {
  /**
   * @before will run at the start of the test cases
   * * here we delete all the old data from db
   */
  before((done) => {
    done();
  });
  /**
   * @after will run after the last test cases of the file
   * * here we reset all the global variables used for the entire test file
   */
  after((done) => {
    resetAllTestVariables();
    done();
  });
  /**
   * * perform test process as entire test file
   */
  describe('[GET] / | Basic test function name', () => {
    it('it should do some test', (done) => {
      chai
        .request(Server)
        .post(`${baseRoute}/`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have.property('message');
          res.body.should.have.property('result');
          res.body.result.should.be.a('object');
          done();
        });
    });
  });
});
