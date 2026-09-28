import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolio } from '../src/portfolioData.js';

test('portfolio content has the main landing sections', () => {
  const sectionIds = portfolio.sections.map((section) => section.id);

  assert.deepEqual(sectionIds, [
    'hero',
    'intro',
    'achievement',
    'cases',
    'service',
    'process',
    'collaboration',
    'contact',
  ]);
});

test('red remains an accent, not the page background', () => {
  assert.equal(portfolio.theme.background, 'white');
  assert.equal(portfolio.theme.accentUse, 'restrained');
});

test('process contains three ordered steps', () => {
  assert.equal(portfolio.process.length, 3);
  assert.deepEqual(
    portfolio.process.map((step) => step.number),
    ['01', '02', '03'],
  );
});

test('achievement is a separate section for IPT Group win', () => {
  assert.equal(portfolio.achievement.team, 'IPT Group');
  assert.equal(portfolio.achievement.place, 'I место');
  assert.match(portfolio.achievement.participant, /Мұсұлманқұл Алмаз/);
  assert.match(portfolio.achievement.image.src, /2-17-1-600x400\.jpg$/);
  assert.ok(!portfolio.cases.some((caseItem) => caseItem.title.includes('IPT Group')));
});

test('hero copy is personalized for Almaz portfolio', () => {
  const heroText = portfolio.hero.title.join(' ');

  assert.doesNotMatch(heroText, /VICTORIIAAA|DSGN/i);
  assert.match(heroText, /ALMAZ|FRONTEND|AI/i);
  assert.ok(portfolio.nav.some((item) => item.label === 'достижение'));
});
