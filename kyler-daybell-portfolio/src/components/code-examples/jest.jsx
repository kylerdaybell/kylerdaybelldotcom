import React, { Component } from 'react';
import '../../public/css/code.css';
import '../../public/css/prism.css';



class JestExample extends Component {
    render() {
        return (
            <>
                 <h1 className="header">Jest testing framework</h1>
    <div className="page-text">
        <p>
            This jest testing framework, shows a category database service under test. 
            jest allows the first parameter of the test function to be the name of the test, this allows spaces to be in the name of the test
            this allows tests to be better defined and more readable. 
            Note that the service uses dependency injection to mock database calls the service makes.

        </p>
    </div>
    <pre className="code language-jsx">
            {`
            var SaharaTestService = require('../services/SaharaTestService');
            var CategoryDatabaseService = require('../services/CategoryService');
            CategoryDatabaseService.constructor(SaharaTestService);
            
            test('Given a valid username and the user has created a category before the category model should return at least one category',async ()=>{
                let categories = await CategoryDatabaseService.getAllCategories('kyler');
                expect(categories.length).toBeGreaterThan(0);
            })
            
            test('Given an invalid username the Category Model should return an empty list',async ()=>{
                let categories = await CategoryDatabaseService.getAllCategories('bob');
                expect(categories.length).toBeLessThanOrEqual(0);
            })
            
            test('Given a user is logged in that user can add catagories to the database',async ()=>{
                let WasCategoryAdded = await CategoryDatabaseService.addNewCategory('username','category name','category description','color');
                expect(WasCategoryAdded).toBe(true);
            })
            
            test('givin a valid category id a user who owns that category can edit and update it',async ()=>{
                let WasCategoryEdited = await CategoryDatabaseService.updateCategory('kyler',1,'category name','category description','color');
                expect(WasCategoryEdited).toBe(true);
            })
            
            //this is a broken test we should really expect false
            test('givin an invalid category id a user who owns that category can not edit and update it',async ()=>{
                let WasCategoryEdited = await CategoryDatabaseService.updateCategory('bob',5,'category name','category description','color');
                expect(WasCategoryEdited).toBe(false);
            })
            
            test('givin a valid username the user can delete a category',async ()=>{
                let WasCategoryEdited = await CategoryDatabaseService.removeCategory('kyler',1);
                expect(WasCategoryEdited).toBe(true);
            })`
            }
            </pre>
            </>
        );
    }
}

export default JestExample;