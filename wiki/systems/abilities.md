# Ability Runes

**Unlock Your Potential Through Ancient Power**

Ability runes are mystical artifacts that grant humanoids access to extraordinary powers and combat techniques. Each rune contains concentrated magical energy that, when properly attuned, bestows specific abilities upon the wielder.

::: warning Alpha Build Limitations
Abilities in the current alpha build do not feature special animations or visual effects. Full animation systems and enhanced visual feedback will be implemented in the complete release version.
:::

## Rune Mastery System

To harness the power of an ability rune, characters must meet specific prerequisites:

- **Attribute Requirements**: Each rune demands minimum attribute thresholds that reflect the physical, mental, or spiritual demands of the ability
- **Tier Progression**: Higher-tier runes require corresponding character advancement, ensuring abilities scale appropriately with player progression
- **Attunement Process**: Runes can be unequipped, but doing so afflicts the character with rune exhaustion debilitating condition that prevents any further rune modifications for 7 days

This system ensures that powerful abilities remain meaningful rewards for character development while maintaining balanced progression throughout your journey.

## Ability Runes Catalog

The following runes are organized by archetype and tier, obtainable through dungeons and quests.


## **Warrior Archetype**

*Warrior abilities focus on tanking, crowd control, team support, and devastating melee attacks, making them excellent frontline fighters and protectors.*

### Tier I

::: details Pull
**Target:** Entity Target  
**Cooldown:** 80s  
**Cast Time:** Instant  
**Distance:** 6 tiles

Pulls target toward the caster or pulls caster toward immovable targets. Has 2 charges.

**Requirements:** Strength: 15, Stamina: 10 
:::

::: details Taunt
**Target:** Entity Target  
**Cooldown:** 20s  
**Cast Time:** Instant  
**Distance:** 8 tiles

Forces enemy to target the caster, interrupting their current action. Has 2 charges.

**Requirements:** Strength: 15, Stamina: 5, Agility: 5
:::

::: details Bash
**Target:** Entity Target  
**Cooldown:** 60s  
**Cast Time:** 1s  
**Distance:** 2 tiles

Stuns target for 5 seconds. 50% more effective when wielding a shield.

**Requirements:** Strength: 10, Stamina: 10, Agility = 5, Melee weapon  
:::


### Tier II

::: details Clean Cut
**Target:** Entity Target (Plus shape area)  
**Cooldown:** 120s
**Cast Time:** 2.5s
**Uses:** 3
**Distance:** Melee range

Powerful attack (2× damage) on primary target and normal damage to adjacent enemies. Has 3 charges.

**Requirements:** Strength: 23, Agility: 14, Melee weapon  
:::

::: details Block
**Target:** Self  
**Cooldown:** 80s  
**Cast Time:** Instant  
**Distance:** Self

Blocks incoming attacks with damage reduction. Enhanced effectiveness when using a shield.

**Requirements:** Strength: 12, Stamina: 25, Melee weapon  
:::


### Tier III

::: details Vulture Strike
**Target:** Entity Target  
**Cooldown:** 60s  
**Cast Time:** 0.5s  
**Uses:** 2
**Distance:** 7 tiles

Delivers a strike (0.8× damage modifier) that immobilizes the target for 12 seconds. Has 2 charges.

**Requirements:** Strength: 25, Stamina: 10, Agility: 15, Melee weapon
:::

::: details War Shout
**Target:** Self (6 tile radius)  
**Cooldown:** 180s  
**Cast Time:** Instant  
**Distance:** Self

Applies offensive and defensive enchantments to all allied units in area for 40 seconds.

**Requirements:** Stamina: 20, Strength: 15, Spirit: 15
:::


### Tier IV

::: details Knockout
**Target:** Entity Target  
**Cooldown:** 400s  
**Cast Time:** Instant  
**Uses:** 3
**Distance:** Melee range

Devastating attack that knocks target back 8 tiles and stuns them for 30 seconds.

**Requirements:** Strength: 40, Agility: 22, Melee weapon
:::

::: details Protection
**Target:** Entity Target  
**Cooldown:** 160s  
**Cast Time:** 1  
**Distance:** 8 tiles

Applies defensive enchantment to self and links with target to transfer portion of their damage taken.

**Requirements:** Strength: 15, Stamina: 27, Spirit: 20, Melee weapon 
:::

### Tier V

::: details Toughness
**Target:** Self  
**Cooldown:** 300s  
**Cast Time:** Instant  
**Distance:** Self

Reduces incoming damage for a duration, making the warrior significantly more durable and immune debuff status effect.

**Requirements:** Stamina: 45, Strength: 15, Agility: 15, Melee weapon
:::

::: details Fortress
**Target:** Self (6 tile radius)  
**Cooldown:** 180s  
**Cast Time:** Instant  
**Distance:** Self

Enhances all allied units in area and knocks back/stuns enemies (10 tiles knockback, 10s stun).

**Requirements:** Stamina: 25, Strength: 30, Spirit: 20, Melee weapon
:::


## **Berserker Archetype**

*Berserker abilities emphasize raw damage output, life-stealing mechanics, and aggressive combat styles that reward taking risks for massive damage potential.*

### Tier I

::: details Whirlwind
**Target:** Self Cast  
**Cooldown:** 80s  
**Cast Time:** 0.5s
**Uses:** 3

Performs a spinning attack hitting all enemies in a 2-tile radius around the caster, dealing 125% damage.

**Area of Effect:** Circle (2 tiles radius)  
**Requirements:** Stamina: 5, Strength: 15, Agility: 5, Melee weapon
:::

::: details Armor Pierce
**Target:** Entity Target  
**Cooldown:** 120s
**Cast Time:** 0.5s
**Distance:** 1 tile  
**Uses:** 3

Attacks a target dealing 50% damage and applying a defensive break effect that reduces their damage reduction.

**Requirements:** Stamina: 5, Strength: 10, Agility: 10, Melee weapon
:::


### Tier II

::: details Life Strike
**Target:** Entity Target  
**Cooldown:** 180s
**Cast Time:** 0.7s  
**Uses:** 3

Strikes a target dealing 100% damage and healing the caster for 200% of the damage dealt.

**Requirements:** Strength: 10, Agility: 22, Intelligence: 5, Melee weapon
:::

::: details Charge
**Target:** Entity Target  
**Cooldown:** 80s  
**Cast Time:** Instant  
**Uses:** 2
**Distance:** 6 tiles

Charges toward a target dealing 50% damage and immobilizing them for 10 seconds upon impact.

**Requirements:** Strength: 20, Agility: 17, Melee weapon
:::


### Tier III

::: details Adrenalin Rush
**Target:** Self Cast  
**Cooldown:** 80s  
**Cast Time:** 0.5s  
**Uses:** 2

Temporarily increases movement speed and offensive capabilities for a limited duration.

**Requirements:** Strength: 20, Agility: 15, Spirit: 15
:::

::: details Vertical Slash
**Target:** Tile Target  
**Cooldown:** 180s  
**Cast Time:** 2.5s

Performs a devastating frontal cone attack dealing 350% damage to all enemies in the area.

**Area of Effect:** Forward cone (5x2 tiles)  
**Requirements:** Strength: 25, Agility: 25, Melee weapon
:::

### Tier IV

::: details Tiger Pierce
**Target:** Tile Target  
**Cooldown:** 240s  
**Cast Time:** 3s

Unleashes a piercing cone attack dealing 250% damage with maximum armor penetration and applying defensive break.

**Area of Effect:** Circle (5 tiles)  
**Requirements:** Strength: 22, Agility: 40, Melee weapon
:::

::: details Ground Shake
**Target:** Self Cast  
**Cooldown:** Variable  
**Cast Time:** Variable

Creates a massive ground-shaking attack that damages and immobilizes all enemies in a large radius around the caster.

**Area of Effect:** Circle (8 tiles radius)  
**Requirements:** Melee weapon
:::

### Tier V

::: details Hammer Smash
**Target:** Tile Target  
**Cooldown:** 240s  
**Cast Time:** 3.5s
**Distance:** 10 tiles

Charges to target location and creates a devastating area attack that stuns and damages all enemies in the impact zone.

**Area of Effect:** Circle (4 tiles radius)  
**Requirements:** Strength = 45, Spirit = 15, Agility = 15, Melee weapon
:::

::: details Rage
**Target:** Self Cast  
**Cooldown:** 600s  
**Cast Time:** 1.5s

Enters a berserk state granting life steal, chance to break enemy defenses, and chance to stun on attacks.

**Requirements:** Strength: 30, Agility: 25, Spirit: 20, Melee weapon
:::


## **Rogue Archetype**

*Rogue abilities focus on mobility, stealth, precision strikes, and debuff effects, excelling at hit-and-run tactics and single-target elimination.*

### Tier I

::: details Poison Blades
**Target:** Self  
**Cooldown:** 120s  
**Cast Time:** Instant  
**Usages:** 2
**Distance:** Self

Enchants weapons with poison, causing attacks to apply poison damage over time. Has 2 charges.

**Requirements:** Strength: 5, Agility: 15, Intelligence: 5, Melee weapon  
:::

::: details Sprint
**Target:** Self  
**Cooldown:** 120s  
**Cast Time:** 0.1s
**Usages:** 2
**Distance:** Self

Increases movement speed for a duration. Has 2 charges for quick repositioning.

**Requirements:** Stamina: 12, Agility: 13,
:::

### Tier II

::: details Leg Strike
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 0.5s  
**Distance:** 3 tiles

Attacks enemy legs dealing damage (0.5×, 2× if backstab) and immobilizing them for 6 seconds.

**Requirements:** Strength: 17, Agility: 20, Melee weapon  
:::

::: details Precision Slash
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 0.5s  
**Distance:** 3 tiles

Deals precise damage (1.5×) with massive backstab bonus (4×). Has 2 charges.

**Requirements:** Agility: 20, Strength: 12, Melee weapon  
:::

::: details Stealth
**Target:** Self  
**Cooldown:** 120s  
**Cast Time:** 0.5s  
**Distance:** Self

Becomes invisible to enemies for a duration, allowing for positioning and surprise attacks. Has 2 charges.

**Requirements:** Agility: 25, Stamina: 12  
:::

### Tier III

::: details Dagger Throw
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 0.5s  
**Distance:** 8 tiles

Throws daggers that bounce between 3 targets within 5 tiles, applying slow, defensive break, and offensive break effects.

**Requirements:** Agility: 30, Strength: 20, Melee weapon  
:::

::: details Shadow Step
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 1.5s  
**Distance:** 8 tiles

Teleports behind target enemy, applies offensive enchantment, and delivers a powerful attack (3× damage modifier). Has 2 charges.

**Requirements:** Strength = 10, Agility = 30, Intelligence = 10, Melee weapon  
:::


### Tier IV

::: details Shadow Strike
**Target:** Tile Target (3x3 area)  
**Cooldown:** 450s  
**Cast Time:** 0.5s  
**Distance:** 10 tiles

Teleports to target location, deals damage (2.5× modifier) to enemies in area, and removes all buffs from targets.

**Requirements:** Agility: 32, Strength: 20, Intelligence: 10, Melee weapon  
:::

::: details Shadow Mark
**Target:** Entity Target  
**Cooldown:** 240s  
**Cast Time:** 1.5s  
**Distance:** 4 tiles

Marks target enemy, healing all units when damaging marked target.

**Requirements:** Agility: 40, Intelligence: 22, Melee weapon
:::


### Tier V

::: details Dagger Dance
**Target:** Entity Target  
**Cooldown:** 360s  
**Cast Time:** 0.5s  
**Distance:** 8 tiles

Performs a deadly dance, leaping between 5 enemies within 4 tiles, dealing damage (2.5× modifier) and stealing their buffs.

**Requirements:** Agility: 35, Strength: 15, Intelligence: 15, Spirit: 10, Melee weapon
:::

::: details Poison Smoke
**Target:** Area Effect (5 tile radius)  
**Cooldown:** 720s  
**Cast Time:** 3s  
**Distance:** 10 tiles

Creates a poison cloud that lasts 60 seconds, reducing movement speed and hit rate of enemies within the area.

**Requirements:** Agility: 55, Intelligence: 20, Melee weapon
:::


## **Archer Archetype**

*Archer abilities excel in precise ranged combat, mobility through movement, trap deployment, and strategic positioning for maximum damage effectiveness.*

### Tier I

::: details Heavy Arrow
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 2s  
**Distance:** +3 tiles

Fires a powerful arrow dealing 2.5× damage, slowing the target and knocking them back 6 tiles.

**Requirements:** Agility: 15, Spirit: 5, Intelligence: 5, Ranged weapon
:::

::: details Vulnerability Mark
**Target:** Entity Target  
**Cooldown:** 240s  
**Cast Time:** 1.5s  
**Distance:** +8 tiles

Marks target with vulnerability that increases damage taken with each hit, stacking up to a maximum threshold.

**Requirements:** Agility: 15, Intelligence: 5, Strength: 5, Ranged weapon
:::

### Tier II

::: details Precision Shot
**Target:** Entity Target  
**Cooldown:** 120s  
**Cast Time:** 1.5s  
**Distance:** +3 tiles

Fires a precise shot dealing 2.5× damage and stunning the target.

**Requirements:** Strength: 15, Agility: 22, Ranged weapon
:::

::: details Trap
**Target:** Self Cast  
**Cooldown:** 360s  
**Cast Time:** 0.5s

Immobilizes all nearby enemies for 10 seconds.

**Area of Effect:** Circle (4 tiles radius)
**Requirements:** Agility: 25, Stamina: 12
:::

### Tier III

::: details Poison Mark
**Target:** Entity Target  
**Cooldown:** 240s  
**Cast Time:** 2.5s  
**Distance:** +8 tiles

Marks target with poison that stacks damage and healing reduction over time. Inflicts nature damage over time.

**Requirements:** Intelligence: 20, Agility: 30, Ranged weapon
:::

::: details Rapid Pace
**Target:** Self Cast  
**Cooldown:** 320s  
**Cast Time:** Instant

Temporarily increases attack speed for a limited duration.

**Requirements:** Strength: 15, Agility: 35, Ranged weapon
:::

### Tier IV

::: details Arrow Volley
**Target:** Tile Target  
**Cooldown:** 800s  
**Cast Time:** 3.5s  
**Distance:** +25 tiles

Rains arrows in a large area, dealing 250% damage and slowing enemies by reducing their movement speed.

**Area of Effect:** Circle (6 tiles radius)  
**Requirements:** Intelligence: 20, Agility: 42, Ranged weapon
:::

::: details Backstep
**Target:** Self Cast  
**Cooldown:** 300s  
**Cast Time:** Instant

Instantly moves 6 tiles backward, removes slow and immobilize effects, and reduces all other ability cooldowns by 300 seconds.

**Requirements:** Spirit: 12, Agility: 40, Intelligence: 10,
:::

### Tier V

::: details Snipe
**Target:** Entity Target  
**Cooldown:** 720s  
**Cast Time:** 5s  
**Distance:** +35 tiles

Charges a devastating shot dealing 6× damage with guaranteed hit and maximum armor penetration. Projectile travels at double speed.

**Requirements:** Intelligence: 20, Agility: 55, Ranged weapon
:::

::: details Multishot
**Target:** Self Cast  
**Cooldown:** 600s  
**Cast Time:** Instant

Temporarily enhances attacks to fire 2 additional projectiles with 40% damage for a limited duration.

**Requirements:** Spirit: 15, Strength: 15, Agility: 45, Ranged weapon
:::


## **Mage Archetype**

*Mage abilities center around elemental magic, area-of-effect spells, and battlefield control through powerful ranged attacks and magical manipulation.*

### Tier I

::: details Fireball
**Target:** Area Effect (2 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 7s  
**Distance:** 12 tiles

Launches a magical projectile that deals fire damage (3.5× modifier) and applies defensive break effect. Has 50% chance to set targets on fire.

**Requirements:** Intelligence: 20, Spirit: 5, Magic weapon  
:::

::: details Enchant
**Target:** Area Effect (2 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 5s  
**Distance:** 8 tiles

Enhances friendly units in a small area with offensive enchantment, increasing their damage output for a duration.

**Requirements:** Intelligence: 10, Spirit: 15, Magic weapon  
:::

### Tier II

::: details Teleport
**Target:** Tile Target (3x3 area)  
**Cooldown:** 520s  
**Cast Time:** 2s  
**Distance:** 50 tiles

Instantly transports the caster and nearby friendly units in a 3x3 area to the target location. Ignores obstacles and range limitations.

**Requirements:** Intelligence: 20, Agility: 12
:::

::: details Static Electricity
**Target:** Area Effect (5x1 line)  
**Cooldown:** 520s  
**Cast Time:** 2s  
**Distance:** 15 tiles

Creates static electricity fields that deal electrical damage (2× modifier) and stun enemies for 6 seconds. Fields persist for 60 seconds.

**Requirements:** Intelligence: 20, Agility: 12, Magic weapon  
:::

::: details Fast Cast
**Target:** Self  
**Cooldown:** 240s  
**Cast Time:** Instant
**Distance:** Self

Applies a buff that reduces casting time for subsequent spells. Single use per cooldown period.

**Requirements:** Intelligence: 15, Stamina: 15  
:::

### Tier III

::: details Frost Nova
**Target:** Self (5 tile radius)  
**Cooldown:** 600s  
**Cast Time:** 0.5s  
**Distance:** 5 tiles

Creates an explosive burst of frost around the caster that deals water damage (1× modifier) and freezes enemies.

**Requirements:** Intelligence: 35, Spirit: 15, Magic weapon  
:::

::: details Thunder
**Target:** Area Effect (2 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 1.5s  
**Distance:** 20 tiles
**Usages: ** 3

Calls down lightning that deals electrical damage (1× modifier). Has 3 charges: normal damage at 1 charge, immobilizes for 5s at 2 charges, stuns for 5s at 3 charges. Has 20% chance to ignite targets.

**Requirements:** Intelligence: 30, Agility: 20, Magic weapon  
:::

### Tier IV

::: details Blizzard
**Target:** Area Effect (14 tile radius)  
**Cooldown:** 7 days  
**Cast Time:** 20s  
**Distance:** 75 tiles

Creates a massive blizzard that persists for 2 hours, dealing continuous water damage and severely slowing enemies. Can freeze targets. Ignores obstacles.

**Requirements:** Intelligence: 40, Spirit: 22, Magic weapon  
:::

::: details Ward
**Target:** Self  
**Cooldown:** 800s  
**Cast Time:** 0.5s  
**Distance:** Self

Creates a protective barrier around the caster that reflects a percentage of incoming damage back to attackers for a duration.

**Requirements:** Intelligence: 20, Stamina: 12, Spirit: 30, Magic weapon  
:::

### Tier V

::: details Meteor
**Target:** Area Effect (8 tile radius)  
**Cooldown:** 10 days  
**Cast Time:** 25s  
**Distance:** 75 tiles

Summons a devastating meteor that crashes down dealing massive fire damage (4.5× modifier). Has 50% chance to set targets on fire. Ignores obstacles.

**Requirements:** Intelligence: 55, Strength: 25, Magic weapon  
:::

::: details Protective Field
**Target:** Area Effect (7 tile radius with 3 tile gap)  
**Cooldown:** 1200s  
**Cast Time:** 6s  
**Distance:** 25 tiles

Creates a large protective field that shields multiple allies from damage for 40 seconds. Provides area-wide protection for friendly units.

**Requirements:** Intelligence: 30, Spirit: 45, Magic weapon  
:::


## **Priest Archetype**

*Priest abilities specialize in healing, protective enchantments, crowd control through sleep and fear effects, and powerful restoration magic for sustained team survival.*

### Tier I

::: details Heal
**Target:** Area Effect (2 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 6s  
**Distance:** 12 tiles

Heals friendly units in a small area for 5× healing multiplier based on caster's offensive stats.

**Requirements:** Stamina: 10, Spirit: 15, Magic weapon  
:::

::: details Void Blast
**Target:** Entity Target  
**Cooldown:** 320s  
**Cast Time:** 3s  
**Distance:** 12 tiles

Launches a projectile that deals damage (2× modifier) and applies fear effect to the target.

**Requirements:** Intelligence: 10, Spirit: 15, Magic weapon  
:::

### Tier II

::: details Regeneration
**Target:** Entity Target  
**Cooldown:** 420s  
**Cast Time:** 1s  
**Distance:** 12 tiles

Applies regeneration effect to target ally, healing them over time based on caster's offensive stats. Has 3 charges.

**Requirements:** Stamina: 17, Spirit: 20, Magic weapon  
:::

::: details Guardian Field
**Target:** Entity Target  
**Cooldown:** 320s  
**Cast Time:** 1s  
**Distance:** 12 tiles
**Usages:** 2

Applies defensive enchantment to target ally, increasing their defensive capabilities for a duration. Has 2 charges.

**Requirements:** Strength: 15, Spirit: 22, Magic weapon  
:::

### Tier III

::: details Hollow
**Target:** Self (4 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 0.5s  
**Distance:** Self

Creates a fear aura around the caster that affects all enemies within range, causing them to flee in terror.

**Requirements:** Intelligence: 25, Spirit: 25, Magic weapon  
:::

::: details Blink 
**Target:** Tile Target
**Cooldown:** 320s
**Cast Time:** 0.5s
**Distance:** 15 tiles
**Usages:** 2

Instantly teleports the caster to target location and reduces cooldowns of other abilities by 100s. Has 2 charges.

**Requirements:** Spirit: 30, Agility: 20,
:::

### Tier IV

::: details Heal Nova
**Target:** Self (4 tile radius)  
**Cooldown:** 520s  
**Cast Time:** 5s  
**Distance:** Self

Heals all friendly units around the caster (5× healing multiplier) and applies regeneration effect to each target.

**Requirements:** Intelligence: 20, Spirit: 30, Stamina: 12, Magic weapon  
:::

::: details Lullaby
**Target:** Area Effect (3 tile radius)  
**Cooldown:** 320s  
**Cast Time:** 2.5s  
**Distance:** 12 tiles

Puts enemies in target area to sleep for a duration, rendering them unable to act.

**Requirements:** Spirit: 45, Stamina: 17, Magic weapon  
:::

### Tier V

::: details Guardian Shield
**Target:** Entity Target  
**Cooldown:** 320s  
**Cast Time:** 1s  
**Distance:** 12 tiles
**Usages:** 2

Provides target ally with damage reduction, endurance bonus, and protective effects for a duration. Has 2 charges.

**Requirements:** Spirit: 45, Stamina: 30, Magic weapon  
:::

::: details Resurrection
**Target:** Entity Target  
**Cooldown:** 1200s  
**Cast Time:** 30s  
**Distance:** 5 tiles

Revives target with 50% of maximum health and vitality. Has 3 charges.

**Requirements:** Stamina: 20, Agility: 20, Spirit: 55, Magic weapon  
:::


::: tip Navigation
Use the browser's search function (Ctrl+F) to quickly find specific abilities or keywords within this page.
:::

## Screenshots

![Rune menu](/resources/menus/status_runes.png)