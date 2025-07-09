# Combat System

*Real-time tactical warfare with strategic depth*

## Overview

RuneEra employs a sophisticated real-time combat system that seamlessly blends continuous 
action with strategic planning. Combat flows naturally in real-time, 
but player retain absolute control through comprehensive pause mechanics, 
allowing for tactical analysis and precise order coordination at any moment.

## Core Combat Mechanics

### Time Control & Command

**Real-Time Flow**
: Combat progresses continuously, creating dynamic and fluid battlefield 
conditions where timing and positioning matter as much as raw power.

**Strategic Pause**
: Player can halt time instantly to reassess battlefield conditions, 
issue new orders, and adjust tactical approaches without pressure.

**Variable Time Scale**
: Control the pace of engagement to match your preferred command style, 
from methodical tactical planning to intense real-time action.

### Victory Determinants

Combat outcomes are influenced by multiple interconnected factors:

**Unit Composition & Numbers**
: The foundation of tactical superiority lies in deploying the right 
combination of specialists in optimal quantities for each engagement type.

**Equipment Mastery**
: Gear quality, weapon proficiency, and armor effectiveness create 
significant power differentials that can overcome numerical disadvantages.

**Ability Utilization**
: Strategic deployment of runic abilities, special techniques, and 
timing-sensitive maneuvers often determines the outcome of closely matched encounters.

**Consumable Resources**
: Potions, elixirs, and tactical items provide crucial battlefield 
advantages that can shift momentum at critical moments.

## Advanced Tactical Systems

### Mana Command Authority

**Global Mana Abilities**
: Player wields powerful mana abilities that can directly 
alter battlefield conditions, from environmental manipulation to direct damage dealing.

**Strategic Resource Management**
: Mana represents a finite but renewable resource that must be carefully 
allocated across multiple tactical options during prolonged engagements.

### Target Prioritization

Effective combat requires understanding enemy vulnerabilities 
and adapting targeting strategies accordingly:

**Spellcaster Vulnerability**
: Casting units suffer maximum disruption from attack progress 
knockback, making them priority targets for interrupt-focused strategies.

**Ranged Unit Disruption**
: Archers and similar ranged combatants experience moderate 
knockback effects, allowing for effective harassment tactics.

**Melee Resistance**
: Close-combat specialists remain immune to attack progress 
knockback, requiring alternative tactical approaches such as crowd control or overwhelming force.

### Environmental Warfare

**Terrain Utilization**
: Natural and constructed chokepoints become force 
multipliers when facing numerically superior opponents.

**Mana-Enhanced Terrain**
: Environmental abilities can create temporary barriers, difficult 
terrain, or tactical advantages that reshape the battlefield to favor strategic positioning.

**Crowd Control Mastery**
: Effective use of immobilization, slowing effects, and area 
denial ensures that superior numbers cannot be brought to bear simultaneously.

## Tactical Principles

### Engagement Doctrine

**Threat Assessment**
: Identify and neutralize the most dangerous opponents first, 
typically spellcasters and specialized damage dealers.

**Crowd Control Priority**
: Disable key threats through strategic application of stuns, 
immobilization, and other status effects rather than attempting to eliminate all enemies simultaneously.

**Resource Conservation**
: Balance immediate tactical needs with long-term sustainability, 
ensuring that consumables and mana are available for critical moments.

**Positioning Superiority**
: Leverage terrain, chokepoints, and formation advantages 
to negate enemy numerical superiority.

### Combat Flow Management

**Initiative Control**
: Maintain battlefield tempo through aggressive positioning, 
threat elimination, and resource denial.

**Adaptive Strategy**
: Continuously reassess and adjust tactical approaches 
based on emerging battlefield conditions and enemy responses.

**Escalation Management**
: Gradually deploy more powerful abilities and resources as engagement 
intensity increases, reserving ultimate techniques for decisive moments.



## Combat Status Effects

Combat status effects are temporary conditions that affect entities during combat, providing 
various benefits or penalties. These effects can modify stats, disable abilities, or create ongoing damage/healing over time.
Here is a list of the most common effects.

::: tip Note
For each boss or ability there can be its own unique effect
:::

### Control Effects
Effects that limit or prevent actions:

**Stun** - Completely disables movement and actions for a short duration.

**Immobilize** - Prevents movement while allowing other actions. Entities can still attack and use abilities but cannot change position.

**Sleep** - Renders the target unconscious and unable to act. Similar to stun but may have different resistance mechanics and can be broken by damage.

**Fear** - Causes the target to lose control and flee. The entity becomes uncontrollable and may attempt to move away from threats.

**Frozen** - Completely disables actions and movement until first damage taken, which is increased.

### Damage Effects
Effects that deal damage over time:

**Poison** - Inflicts nature damage over time with high penetration while lowering healing received. 

### Stat Modification Effects
Effects that enhance or reduce entity capabilities:

**Offensive Break** - Significantly reduces damage output, making attacks much less effective.

**Defensive Break** - Reduces damage resistance, making the target more vulnerable to incoming attacks.

**Offensive Enchantment** - Increases damage output and offensive capabilities.

**Defensive Enchantment** - Improves damage resistance and defensive stats.

**Sprint** - Increases movement speed and dodge rate for improved mobility.

**Slow** - Reduces movement speed.


### Effect Mechanics

#### Duration
Most effects have a set duration that counts down over time. Some effects may be permanent until dispelled or may refresh their duration when reapplied.

#### Stacking
Only must powerful effect is used at same time.

#### Resistance
Some effects gain resistance duration after they expire. This is to prevent spamming the same effect over and over again (Stun, Frozen, Fear, ...)

#### Dispelling
Some effects can be removed through specific abilities, items, or by meeting certain conditions (such as taking damage to break sleep / frozen effects).

### Visual Indicators
Each status effect displays a distinctive icon and visual effect on the affected entity, making it easy to 
identify active conditions during combat. The effects also provide detailed tooltips showing their current impact and remaining duration.


::: tip Combat Mastery
Success in RuneEra's combat system comes from understanding the interplay between real-time positioning, 
strategic resource management, and tactical timing. Master the pause function to analyze complex situations without pressure.
:::

::: warning Resource Management
Mana abilities and consumables are powerful but finite. Consider the broader
strategic context before committing your most valuable resources to any single engagement.
:::