const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seedFruits = document.getElementsByClassName('seed')
    console.log(seedFruits)


    // 2. Get all seedless fruit elements
    // Your code here
    const seedLessFruits = document.getElementsByClassName('seedless')
    console.log(seedLessFruits);

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedLessFruits = document.getElementsByClassName('seedless')[0]
    console.log(firstSeedLessFruits);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const innerSpan = document.querySelector('#wrapper span');
    console.log(innerSpan)


    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.querySelector('#wrapper')
    console.log(wrapper.children)

    // 6. Get all odd number list items in the list
    // Your code here
    const listItems = Array.from(document.querySelectorAll('li'))
    const oddListItems = listItems.filter(li => listItems.indexOf(li) % 2 !== 0);
    console.log(oddListItems)

    // 7. Get all even number list items in the list
    // Your code here
    const evens = document.querySelectorAll('ol > li:not(.odd)')
    console.log(evens)


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const companies = Array.from(document.querySelectorAll('a'))
    const classlessCompanies = companies.filter(company => !company.getAttribute('class'))
    console.log(classlessCompanies)
    // 9. Get "Amazon" list element
    // Your code here
    const amazon = companies.filter(company => company.innerText === 'Amazon');
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll('#three > ul > li');
    console.log(unicorns)
}

window.onload = select;
