describe('Testing main.js', function() {
	// necessary
	it('newStudent should be object', function() {
		expect(typeof newStudent).toBe('object');
	});

	it('newStudent name should be RSR', function() {
		expect(newStudent.name).toBe('RSR');
	});

	it('newStudent name should change', function() {
		newStudent.setName('jabong');
		expect(newStudent.name).toBe('jabong');
	});
});