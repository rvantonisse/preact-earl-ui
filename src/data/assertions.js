const assertions = [{
	assertedBy: '_:evaluator',
	subject: 'https://website-name.org',
	result: {
		description: 'No violations found',
		outcome: 'earl:passed'
	},
	test: 'WCAG21:non-text-content'
},
{
	assertedBy: '_:evaluator',
	subject: 'https://website-name.org/contact-us/',
	result: {
		description: 'Found a heading like text “Contact us” without heading markup! (`<h2>`)',
		outcome: 'earl:failed'
	},
	test: 'WCAG21:info-and-relationships'
},
{
	assertedBy: '_:evaluator',
	subject: 'https://website-name.org/search/?search=some-random-page',
	result: {
		description: 'Found focus order to start with last search entry visible going up instead of down! And when reverse tabbing focus jumps to body (and focus body only)',
		outcome: 'earl:failed'
	},
	test: 'WCAG21:meaningful-sequence'
}];

export default assertions;
